import os
from joblib import dump, load
from sklearn.ensemble import RandomForestClassifier
from models import Avaliation
import skops.io as sio
import pandas as pd

class Model:
    clf: any


    def __init__(self):
        self.clf = getModel()

    def classificate(self,data: Avaliation):

        #print(data)
        
        df = pd.DataFrame({"flooring_base_BETAO": [0],
                       "flooring_base_BETONILHA": [0],
                       "flooring_base_GRANITO": [0],
                       "flooring_base_LAJE": [0],
                       "flooring_base_PEDRA": [0],
                       "wall_mat_base_BETAO": [0],
                       "wall_mat_base_GRANITO": [0],
                       "wall_mat_base_PEDRA": [0],
                       "wall_mat_base_TIJOLO": [0],
                       "flooring_finish_ALCATIFA": [0],
                       "flooring_finish_EPOXI": [0],
                       "flooring_finish_GRANITO": [0],
                       "flooring_finish_LADRILHO": [0],
                       "flooring_finish_LINOLEO": [0],
                       "flooring_finish_MADEIRA": [0],
                       "wall_mat_finish_AZULEJO": [0],
                       "wall_mat_finish_GESSO": [0],
                       "wall_mat_finish_MADEIRA": [0],
                       "wall_mat_finish_REBOCO": [0],
                       "age": [0],
                       "floors": [0],
                       "floor": [0],
                       "retrofit": [0],
                       "ventilation": [0],
                       "n_bellow_floors": [0],
                       "gamaValue": [0]})
        

        df.loc[df["flooring_base_" + data.room.floorBase], "flooring_base_" + data.room.floorBase] = 1
        df.loc[df["wall_mat_base_" + data.room.wallBase], "wall_mat_base_" + data.room.wallBase] = 1
        df.loc[df["flooring_finish_" + data.room.floorFinish], "flooring_finish_" + data.room.floorFinish] = 1
        df.loc[df["wall_mat_finish_" + data.room.wallFinish], "wall_mat_finish_" + data.room.wallFinish] = 1


        df.loc[df["age"], "age"] = data.building.age
        df.loc[df["floors"], "floors"] = data.building.nFloors

        df.loc[df["floor"], "floor"] = data.room.floor
        df.loc[df["retrofit"], "retrofit"] = data.room.retrofit

        if data.room.ventilation == 'NATURAL':
            df.loc[df["ventilation"], "ventilation"] = 0
        elif data.room.ventilation == 'MISTO':
            df.loc[df["ventilation"], "ventilation"] = 1     


        df.loc[df["n_bellow_floors"], "n_bellow_floors"] = data.room.nBellowFloors

        df.loc[df["gamaValue"], "gamaValue"] = data.location.gamaValue


        #print(df)
        return self.clf.predict(df)
    

def getModel():
    clf = sio.load("randomForest.joblib", trusted=True)
    return clf