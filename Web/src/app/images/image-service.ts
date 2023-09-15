import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ImageService {

    constructor(private http: HttpClient){}


    getImage(imageId: string){
        const baseUrl = environment.RnAPI
        this.http.get(baseUrl + 'getImages/' + imageId,{responseType: 'blob'}).subscribe((data)=>{
         return data as Blob
        })
       
    }



}