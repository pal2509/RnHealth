from datetime import datetime

from bson import ObjectId
from dbUtils import get_database
from models import Avaliation, CreateAvaliation, Reading, SubReading, avaliationListEntity, avaliationResponseEntity
from pymongo.database import Database
from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
import hashlib
from sklearn.metrics import f1_score
from datetime import timedelta, date

from routers.auth import Admin, get_current_active_user

router = APIRouter()


@router.get("/getStats", status_code=200)
async def getStats(current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    avaliations = db["Avaliation"].count_documents({})
    readings = db["Avaliation"].count_documents(
        {"reading": {"$ne": None, "$exists": True}})
    if(avaliations != 0):
        ratio = (readings * 100) / avaliations
    else: ratio = 0
    return {
        "avaliations": avaliations,
        "readings": readings,
        "ratio": round(ratio, 1),
        "fScore": round(calcFScore() * 100, 1)
    }


@router.get("/getAvaliationReadingsCount", status_code=200)
async def getStats(current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    # avaliations = db["Avaliation"].count_documents({'created_At':})
    # aval = list(avaliations)

    today = date.today()

    dateList = []

    for i in range(30):
        dateList.append(today - timedelta(days=i))

    dateList = dateList[::-1]

    stats = []

    for d in dateList:
        stats.append({
            "date": d,
            "nAval": db["Avaliation"].count_documents({'created_At': {"$gt": str(d), "$lte": str(d + timedelta(days=1))}}),
            "nRead": db["Avaliation"].count_documents({'created_At': {"$gt": str(d), "$lte": str(d + timedelta(days=1))}, "reading": {"$ne": None, "$exists": True}})
        })

    return stats


@router.get("/getNutsStats", status_code=200)
async def getStats(current_user: Admin = Depends(get_current_active_user), location: str = 'nutsIII', field: str = 'valueRn'):
    db = get_database()
    readings = db["Avaliation"].find(
        {"reading": {"$ne": None, "$exists": True}})
    regions = db["NUTSRegions"].distinct(location)

    stats = []
    keys = []
    for r in regions:
        result = db["Avaliation"].find(
            {"reading": {"$ne": None, "$exists": True}, "location." + location: r})
        readings = list(result)
        if readings != []:
            values = list(map(lambda obj: getAvalProp(field, obj), readings))
            stats.append(values)
            keys.append(r)

    return {"values": stats,
            "keys": keys
            }


@router.get("/getNutsTable", status_code=200)
async def getStats(current_user: Admin = Depends(get_current_active_user), location: str = 'nutsII'):
    db = get_database()

    stats = []

    valueGamma = list(db["Avaliation"].aggregate([
        {"$match": {"reading": {"$ne": None, "$exists": True}}},
        {
            "$group": {
                "_id": "$location." + location,
                "valueGamma": {"$avg": {
                    "$toDouble": "$location.gamaValue",
                }}
            }
        }
    ]))


    valueRn = list(db["Avaliation"].aggregate([
        {"$match": {"reading": {"$ne": None, "$exists": True}}},
          {"$unwind": "$reading"},
        {
            "$group": {
                "_id": "$location." + location,
                "valueRn": {"$avg": {
                    "$toDouble": "$reading.value",
                }}
            }
        }
    ]))


    total = list(db["Avaliation"].aggregate([
        {"$match": {"reading": {"$ne": None, "$exists": True}}},
        {
            "$group": {
                "_id": "$location." + location,
                "total": {"$sum": 1}
            }
        }
    ]))


    for index in range(len(valueGamma)):
        stats.append({
            location: valueGamma[index]["_id"],
            "valueGamma": valueGamma[index]["valueGamma"],
            "valueRn": valueRn[index]["valueRn"],
            "total": total[index]["total"]
        })
    


    return stats




def getAvalProp(prop: str, obj: Avaliation):
    if prop == 'valueRn':
        return obj["reading"][0]["value"]
    elif prop == 'gammaValue':
        return obj["location"]["gamaValue"]


# Calulates the fscore of the model
def calcFScore():
    db = get_database()
    cursor = db["Avaliation"].find({"reading": {"$ne": None, "$exists": True}})
    readings = list(cursor)

    predictions = [reading["classification"] for reading in readings]
    r = [reading["reading"][0] for reading in readings]

    trueVal = [getReadingLabel(float(value['value'])) for value in r]

    return f1_score(trueVal, predictions, average='weighted')

# Gets the corresponding label for the reading


def getReadingLabel(value):
    if (value >= 300):
        return 2
    elif (value >= 150 and value < 300):
        return 1
    else:
        return 0
