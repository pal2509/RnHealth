from datetime import datetime
import os
from pymongo import ReturnDocument

from pyproj import Proj, transform

from bson import ObjectId
from dbUtils import get_database
from emailUtil import sendEmail
from model.modelLib import Model, getModel
from models import Avaliation, CreateAvaliation, NutRegion, Reading, SubReading, avaliationListEntity, avaliationResponseEntity
from pymongo.database import Database
from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
import hashlib
import pandas as pd
import httpx
from routers.auth import Admin, get_current_active_user

router = APIRouter()


#Posts an evaluation to the db
@router.post("/avaliation", response_description="Response model with the classification", status_code=201)
async def postAvaliation(payload: CreateAvaliation):
    db = get_database() #Gets the db
    avaliation: Avaliation = Avaliation() #Creation of the object
    avaliation.building = payload.building
    avaliation.room = payload.room
    avaliation.location = payload.location
    avaliation.email = payload.email
    avaliation.created_At = datetime.utcnow()
    avaliation.updated_At = datetime.utcnow()
    avaliation.confirmed = False

    #Request of the gama value
    avaliation.location.gamaValue = await getGamaValue(avaliation)

    #Model classification
    model = Model()

    avaliation.classification = int(model.classificate(avaliation)[0])

    nutRegion: NutRegion
    if(payload.location.municipality):
        nutRegion = db['NUTSRegions'].find_one({"municipality": payload.location.municipality})
        if(nutRegion):
            if(nutRegion["municipality"]):
                avaliation.location.municipality = nutRegion["municipality"]
            else: avaliation.location.municipality = None
        else:
            nutRegion = db['NUTSRegions'].find_one({"municipality": payload.location.city})
    else:
        nutRegion = db['NUTSRegions'].find_one({"district": payload.location.district})
        avaliation.location.municipality = None

    try:
        avaliation.location.district = nutRegion["district"] 
        avaliation.location.nutsI = nutRegion["nutsI"] 
        avaliation.location.nutsII = nutRegion["nutsII"] 
        avaliation.location.nutsIII = nutRegion["nutsIII"] 
    except:
        avaliation.location.district = ''
        avaliation.location.nutsI = ''
        avaliation.location.nutsII = ''
        avaliation.location.nutsIII = ''

    # Token generation
    avaliation.token = hashValues(str(avaliation))
    avaliation.emailHash = hashValues(avaliation.email)

    

    newAvaliation = db["Avaliation"].insert_one(jsonable_encoder(avaliation))
    createdAvaliation = db["Avaliation"].find_one(
        {"_id": newAvaliation.inserted_id})

    try:
        #Sending of the email
        sendEmail(avaliation.email, avaliation.token, avaliation.emailHash)
    except:
        return(avaliationResponseEntity(createdAvaliation))

    return avaliationResponseEntity(createdAvaliation)

#Get a evaluation through the token
@router.get("/reading", response_description="The avaliation object", status_code=200)
async def getReading(token: str | None):
    db = get_database()
    avaliation = db["Avaliation"].find_one({"token": token})

    return avaliationResponseEntity(avaliation)

#Gets all the evaluations with readings
@router.get("/getAllReadings", status_code=200)
async def getAllReadings(current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    cursor = db["Avaliation"].find({"reading": {"$ne": None, "$exists": True }}) #Query to find which evalutations have a reading
    readings = list(cursor)
    return avaliationListEntity(readings)

#Gets all the evaluations
@router.get("/getAllAvaliations", status_code=200)
async def getAllReadings(current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    cursor = db["Avaliation"].find()
    readings = list(cursor)
    return avaliationListEntity(readings)

#Gets all the evaluations associated to a hashed email
@router.get("/getReadingsByEmail/{emailHash}", status_code=200)
async def getAllReadings(emailHash: str):
    db = get_database()
    cursor = db["Avaliation"].find({"emailHash": emailHash})
    readings = list(cursor)
    return avaliationListEntity(readings)

#Posts a reading to a evaluation
@router.post("/reading/{id}", response_description="The avaliation object", status_code=200)
async def getReading(id, payload: SubReading):
    db = get_database()
    avaliation = db["Avaliation"].find_one({"_id": ObjectId(id)})

    reading: Reading = Reading(id=str(ObjectId()),
                               device=payload.device,
                               value=payload.value,
                               endDate=payload.endDate,
                               startDate=payload.startDate,
                                ocupation=payload.ocupation,
                                typeOfRoom=payload.typeOfRoom,
                                deviceName=payload.deviceName,
                                floor=payload.floor)
    #Checks the existence of the readings array inside the evaluation 
    #In case theres is none it's needed to create and empty array and append the new reading
    if (avaliation['reading'] == None):
        avaliation['updated_At'] = datetime.utcnow()
        avaliation['reading'] = list()
        avaliation['reading'].append(reading)
        result = db["Avaliation"].update_one({"_id": ObjectId(id)},  {"$set": {
            'reading': jsonable_encoder(avaliation['reading']),
            'room.typeOfRoom': payload.typeOfRoom,
            'updated_At': str(datetime.utcnow())
        }})
    else:
        avaliation['updated_At'] = datetime.utcnow()
        avaliation['reading'].append(reading)
        result = db["Avaliation"].update_one({"_id": ObjectId(id)},  {"$set": {
            'reading': jsonable_encoder(avaliation['reading']),
            'updated_At': str(datetime.utcnow())
        }})



    return avaliationResponseEntity(avaliation)

#Updates the email in a evaluation and generates the new token and sends it to the new email
@router.put("/updateEmail/{id}", response_description="The avaliation object", status_code=200)
async def updateEmail(id,payload: Avaliation):
    db = get_database()
    avaliation = db["Avaliation"].find_one({"_id": ObjectId(id)})
    emailHash = hashValues(payload.email)

    result = db["Avaliation"].find_one_and_update({"_id": ObjectId(id)},  {"$set": {
            'email': payload.email,
            'emailHash':emailHash,
            'updated_At': str(datetime.utcnow()),
             'confirmed': True
        }},return_document=ReturnDocument.AFTER)
    
    newToken = hashValues(str(result))

    result = db["Avaliation"].find_one_and_update({"_id": ObjectId(id)},  {"$set": {
        'token': newToken,
        'updated_At': str(datetime.utcnow()),
            'confirmed': True
    }},return_document=ReturnDocument.AFTER)

    sendEmail(result["email"], result["token"], emailHash)

    return avaliationResponseEntity(result)

#Confirms the email in the evaluation
@router.put("/confirmEmail/{id}", response_description="The avaliation object", status_code=200)
async def updateEmail(id,payload: Avaliation):
    db = get_database()
    result = db["Avaliation"].find_one_and_update({"_id": ObjectId(id)},  {"$set": {
            'updated_At': str(datetime.utcnow()),
            'confirmed': True
        }},return_document=ReturnDocument.AFTER)

    return avaliationResponseEntity(result)


#Hash a string with the secret key
def hashValues(value: str):
    return hashlib.sha512(str(value + os.environ.get("secretKey")).encode()).hexdigest()


#Function to make the get request for the gama value
async def getGamaValue(data: Avaliation):
    lon = data.location.longitude
    lat = data.location.latitude

    outProj = Proj(init='epsg:3857')
    inProj = Proj(init='epsg:4326')
    x2,y2 = transform(inProj,outProj,lon,lat)


    #Params for the request
    params = {
        'f': 'json',
        'returnField': 'false',
        'returnGeometry': 'false',
        'returnUnformattedValues': 'false',
        'returnZ': 'false',
        'tolerance': 3,
        'imageDisplay': '978,579,96',
        'geometry': '{"x":'+str(x2)+',"y":'+str(y2)+'}',
        'geometryType': 'esriGeometryPoint',
        'sr': 102100,
        'mapExtent': str(x2-3)+','+str(y2-3)+','+str(x2+3)+',' +str(y2+3)+',',
        'layers': 'visible'
        }
    
    url = 'https://sig.lneg.pt/server/rest/services/CartaRadiometrica/MapServer/identify'

    async with httpx.AsyncClient() as client:
        r = await client.get(url, params=params)

    return r.json()['results'][0]["attributes"]["Stretch.Pixel Value"]