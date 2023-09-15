import os
from bson import ObjectId
import pymongo
import gridfs

#Definition of the connection to the database
MONGO_URI = os.environ.get("mongoConnString")
MONGO_DB_NAME = os.environ.get("MONGO_DB_NAME")
MONGO_USERNAME = os.environ.get("MONGO_USERNAME")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD")


client = pymongo.MongoClient(MONGO_URI, username=MONGO_USERNAME, password=MONGO_PASSWORD)

db = client[MONGO_DB_NAME]



def get_database():
    return db

#Funtions to store and retreive images from db (stores bytes and a title)
def storeImage(contents: bytes, title: str):
    fs = gridfs.GridFS(get_database())
    return fs.put(contents, filename=title)

def getImage(id: str):
    fs = gridfs.GridFS(get_database())
    return fs.get(ObjectId(id)).read()
