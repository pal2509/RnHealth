from datetime import datetime, timedelta
import os
from pydantic import BaseModel
from dbUtils import get_database
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from jose import JWTError, jwt


router = APIRouter()

# TESTE DE AUTH ## Autenticação dos utilizadores


ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 180

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class Admin(BaseModel):
    id: str
    name: str | None = None
    email: str
    disabled: bool | None = None


class AdminInDB(Admin):
    hashed_password: str


def adminResponseEntity(admin) -> dict:
    return {
        "id": str(admin["_id"]),
        "name": admin["name"],
        "email": admin["email"],
        "password": admin["password"],
        "disabled": admin["disabled"],

    }


def adminListEntity(admins) -> list:
    return [adminResponseEntity(admin) for admin in admins]


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def authenticate_user(db, email: str, password: str):
    user = db["Admin"].find_one({"email": email})
    if not user:
        return False
    if not verify_password(password, user['password']):
        return False
    return user


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, os.environ.get("secretKey"), algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    db = get_database()
    user = db["Admin"].find_one({"email": token_data.email})
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: Admin = Depends(get_current_user)):
    if current_user["disabled"] == True:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, os.environ.get("secretKey"), algorithm=ALGORITHM)
    return encoded_jwt

#Return the user token
@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    db = get_database()
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user['email']}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

#Gets the current user
@router.get("/users/me", response_model=Admin)
async def read_users_me(current_user: Admin = Depends(get_current_active_user)):
    return adminResponseEntity(current_user)
