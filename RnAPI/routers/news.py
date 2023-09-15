import base64
from datetime import datetime
import io
import os
from typing import Annotated
from pymongo import ReturnDocument
import pymongo

from pyproj import Proj, transform

from bson import ObjectId
from dbUtils import get_database, getImage, storeImage
from emailUtil import sendEmail
from model.modelLib import Model, getModel
from models import Avaliation, CreateAvaliation, New, NewBody, Reading, SubReading, avaliationListEntity, avaliationResponseEntity, newResponseEntity, newsListEntity
from pymongo.database import Database
from fastapi import APIRouter, Depends, File, Form, UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi.responses import FileResponse,StreamingResponse
import hashlib
import pandas as pd
import httpx
from routers.auth import Admin, get_current_active_user

router = APIRouter()

#Gets the latest 4 news
@router.get("/getNews", status_code=200)
async def getNews():
    db = get_database()
    cursor = db["News"].find().sort('created_At', pymongo.DESCENDING).limit(4)
    news = list(cursor)
    return newsListEntity(news)

#Gets all news
@router.get("/getAllNews", status_code=200)
async def getNews():
    db = get_database()
    cursor = db["News"].find().sort('created_At', pymongo.DESCENDING)
    news = list(cursor)
    return newsListEntity(news)

#Gets a new with id
@router.get("/getNew/{id}", status_code=200)
async def getNews(id: str):
    db = get_database()
    cursor = db["News"].find_one({"_id": ObjectId(id)})
    return newResponseEntity(cursor)
#Gets a image with id
@router.get("/getImages/{id}", status_code=200)
async def getNews(id: str):
    image_bytes = getImage(id)
    return StreamingResponse(io.BytesIO(image_bytes),media_type='image/png')



def _yield_bytes(path):
  with open(path, 'rb') as f:
    yield from f

# @router.post("/postNew", status_code=200)
# async def postNews(payload: NewBody):
#     db = get_database()
#     n: New = New()
#     imageBytes = base64.b64decode(payload.image)
#     image = storeImage(imageBytes, payload.title)
#     n.image = str(image)
#     n.title = payload.title
#     n.mainText = payload.mainText
#     newNew = db["News"].insert_one(jsonable_encoder(n))
#     createdNew = db["News"].find_one(
#         {"_id": newNew.inserted_id})



#     print(createdNew)

#     return newResponseEntity(createdNew)

#Posts a new to the db
@router.post("/postNew", status_code=200)
async def postImage(title: str = Form(...), 
                    mainText: str = Form(...),
                    url: str = Form(...)
                    ,file: UploadFile = File(...),current_user: Admin = Depends(get_current_active_user)):

    db = get_database()
    new: New = New()
    image_bytes = await file.read()
    #Storing the image
    image = storeImage(image_bytes, title)
    new.image = str(image)
    new.title = title
    new.mainText = mainText
    new.url = url
    new.created_At = datetime.utcnow()
    new.updated_At = new.created_At
    newNew = db["News"].insert_one(jsonable_encoder(new))
    createdNew = db["News"].find_one(
        {"_id": newNew.inserted_id})

    return newResponseEntity(createdNew)

#Deletes a new
@router.delete("/deleteNew/{id}", status_code=200)
async def deleteNew(id: str, current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    cursor = db["News"].delete_one({"_id": ObjectId(id)})
    
    if(cursor.deleted_count == 1):
       return { 'Delete with success!'}
    else: return {'Error'}

#Updates the properties of a new
@router.put("/updateNew/{id}", status_code=200)
async def updateNew(id: str, payload: New, current_user: Admin = Depends(get_current_active_user)):
    db = get_database()
    cursor = db["News"].find_one_and_update({"_id": ObjectId(id)},{"$set": {
       'title': payload.title,
       'mainText': payload.mainText,
       'url': payload.url,
       'updated_At': str(datetime.utcnow())
    }},return_document=ReturnDocument.AFTER )
    
    return newResponseEntity(cursor)


#Updates a image from a new
@router.put("/updateNewImage/{id}", status_code=200)
async def updateNew(id: str, file: UploadFile = File(...), current_user: Admin = Depends(get_current_active_user)):
    db = get_database()

    new = db["News"].find_one({'_id': ObjectId(id)})

    image_bytes = await file.read()
    image = storeImage(image_bytes, new["title"])

    cursor = db["News"].find_one_and_update({"_id": ObjectId(id)},{"$set": {
       'image': str(image),
       'updated_At': str(datetime.utcnow())
    }},return_document=ReturnDocument.AFTER )

    return newResponseEntity(cursor)
    