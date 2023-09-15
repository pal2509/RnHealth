import datetime
import json
from bson.objectid import ObjectId
from pydantic import BaseModel


# class PyObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, v):
#         if not ObjectId.is_valid(v):
#             raise ValueError("Invalid objectid")
#         return ObjectId(v)


class Location(BaseModel):
    latitude: float
    longitude: float
    postCode: str | None
    address: str | None
    city: str | None
    district: str | None
    municipality: str | None
    nutsI: str | None
    nutsII: str | None
    nutsIII: str | None
    gamaValue: float | None


class Building(BaseModel):
    nFloors: int
    age: int


class Room(BaseModel):
    floorBase: str
    floorFinish: str
    wallBase: str
    wallFinish: str
    ventilation: str
    retrofit: int
    floor: int
    nBellowFloors: int


class Reading(BaseModel):
    id: str | None
    startDate: str
    endDate: str
    device: str
    value: float
    ocupation: int | None
    typeOfRoom: str | None
    deviceName: str | None
    floor: str | None


class Avaliation(BaseModel):
    email: str | None
    emailHash: str | None
    confirmed: bool | None
    location: Location | None
    building: Building | None
    room: Room | None
    classification: int | None
    token: str | None
    reading: Reading | None
    created_At: datetime.datetime | None
    updated_At: datetime.datetime | None

# Serialializer for avalitation entity


def avaliationResponseEntity(avaliation) -> dict:
    return {
        "id": str(avaliation["_id"]),
        "email": avaliation["email"],
        "emailHash": avaliation["emailHash"],
        "confirmed": avaliation["confirmed"],
        "location": avaliation["location"],
        "building": avaliation["building"],
        "room": avaliation["room"],
        "classification": avaliation["classification"],
        "token": avaliation["token"],
        "reading": avaliation["reading"],
        "created_At": avaliation["created_At"],
        "updated_At": avaliation["updated_At"]
    }


def avaliationListEntity(avaliation) -> list:
    return [avaliationResponseEntity(aval) for aval in avaliation]


class AvaliationResponse(Avaliation):
    id: str
    pass


class CreateAvaliation(BaseModel):
    email: str
    location: Location
    building: Building
    room: Room


class SubReading(BaseModel):
    device: str
    value: float
    startDate: str
    endDate: str
    typeOfRoom: str | None
    ocupation: int | None
    deviceName: str | None
    floor: str | None

# class CustomJSONEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, ObjectId):
#             return str(obj)
#         return super().default(obj)


class Material(BaseModel):
    id: str
    value: str
    viewValue: str


def materialResponseEntity(avaliation) -> dict:
    return {
        "id": str(avaliation["_id"]),
        "value": avaliation["value"],
        "viewValue": avaliation["viewValue"]
    }


def materialListEntity(materials) -> list:
    return [materialResponseEntity(material) for material in materials]


class NewBody(BaseModel):
    title: str
    mainText: str


class New(BaseModel):
    title: str | None
    mainText: str | None
    image: str | None
    url: str | None
    created_At: datetime.datetime | None
    updated_At: datetime.datetime | None


def newResponseEntity(new) -> dict:
    return {
        "id": str(new["_id"]),
        "title": new["title"],
        "mainText": new["mainText"],
        "image": new["image"],
        "url": new["url"],
        "created_At": new["created_At"],
        "updated_At": new["updated_At"]
    }


def newsListEntity(news) -> list:
    return [newResponseEntity(new) for new in news]


class NutRegion(BaseModel):
    id: str
    nutsI: str
    nutsII: str
    nutsIII: str
    district: str
    municipality: str
