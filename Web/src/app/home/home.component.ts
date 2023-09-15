import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { New } from '../models/new';
import { slideAnimation } from './slide.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideAnimation]
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient){
    this.preloadImages();
  }

  news!: New[]

  
  //Image slider code ----------------------------------------------------------------------

  currentIndex = 0;
  slides = [
    {image: 'assets/logo.png', description: 'Image 00'},
    {image: 'assets/IPCA Logo_Cor-01.png', description: 'Image 01'}
  ];


  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide.image;
    });
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }

  //----------------------------------------------------------------------------------------------

  ngOnInit(): void {
    const baseUrl = environment.RnAPI
    this.http.get(baseUrl + 'getNews').subscribe((data)=>{
      this.news = data as New[]
      this.news.forEach((element,i) => {
        
        this.http.get(baseUrl + 'getImages/' + element.image,{responseType: 'blob'}).subscribe((data) =>{
          this.createImageFromBlob(data as Blob, element)

        })
      });
    })


  }


  createImageFromBlob(image: Blob, n: New) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        n.image = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  openNew(n: New){
    console.log(n.url)
    window.open(n.url, "_blank");
  }

}


