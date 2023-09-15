from dbUtils import get_database
from fastapi import APIRouter

from models import Material, materialListEntity


router = APIRouter()


# Endpoints para materiais do piso e paredes

# Gets all the floor materials base


@router.get("/floorMaterialBase", response_description="Array with all the floor materials", status_code=200, response_model=list[Material])
async def getFloorMaterials():
    db = get_database()
    collection = db["FloorBase"]
    cursor = collection.find()
    materials = list(cursor)
    return materialListEntity(materials)


# Gets all the floor materials finish
@router.get("/floorMaterialFinish", response_description="Array with all the floor materials", status_code=200 , response_model=list[Material])
async def getFloorFinishes():
    db = get_database()
    cursor = db["FloorFinish"].find()
    materials = list(cursor)

    return materialListEntity(materials)


# Gets all the wall materials base
@router.get("/wallMaterialBase", response_description="Array with all the wall materials", status_code=200, response_model=list[Material])
async def getWallMaterials():
    db = get_database()
    cursor = db["WallBase"].find()
    materials = list(cursor)

    return materialListEntity(materials)


# Gets all the wall materials finish
@router.get("/wallMaterialFinish", response_description="Array with all the wall materials", status_code=200, response_model=list[Material])
async def getWallFinishes():
    db = get_database()
    cursor = db["WallFinish"].find()
    materials = list(cursor)

    return materialListEntity(materials)
