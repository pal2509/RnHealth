import os

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from emailUtil import sendEmail
from routers.materials import router as materials_router
from routers.auth import router as auth_router, get_password_hash
from dbUtils import get_database
from routers.avaliation import router as avaliation_router
from routers.stats import router as stats_router
from routers.news import router as news_router

from joblib import dump, load



app = FastAPI()

#Routers
app.include_router(materials_router)
app.include_router(auth_router)
app.include_router(avaliation_router)
app.include_router(stats_router)
app.include_router(news_router)

#CORS policy
origins = [
    "http://localhost",
    "http://localhost:50002",
    "http://localhost:50003",
    "http://localhost:4200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





# The first admin comes from .env, so no account ships with the code.
@app.on_event("startup")
def createAdmin():
    email = os.environ.get("ADMIN_EMAIL")
    password = os.environ.get("ADMIN_PASSWORD")
    admins = get_database()["Admin"]
    if email and password and not admins.find_one({"email": email}):
        admins.insert_one({"name": "Admin", "email": email, "password": get_password_hash(password), "disabled": False})


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}




