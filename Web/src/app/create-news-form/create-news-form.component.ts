import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { New } from '../models/new';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news-form',
  templateUrl: './create-news-form.component.html',
  styleUrls: ['./create-news-form.component.css'],
})
export class CreateNewsFormComponent implements OnInit {
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {}

  @Input() new!: New;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateImageEvent = new EventEmitter<New>();
  @Output() drawerClose = new EventEmitter();


  @Input() submitState: boolean = true

  fileToUpload: File | null = null;
  imageToShow: any;

  form!: FormGroup;

  imageIsSelected: boolean = false

  ngOnInit(): void {
    this.new = new New();
    this.new.title = '';
    this.new.mainText = '';
    this.new.url = '';

    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      mainText: [null, Validators.required],
      url: [null, Validators.required]
    });
  }

  submitNew() {
    const baseUrl = environment.RnAPI;

    const formData = new FormData();

    formData.append('title', this.new.title);
    formData.append('url', this.new.url);
    formData.append('mainText', this.new.mainText);
    formData.append('file', this.fileToUpload!);
    this.http.post(baseUrl + 'postNew', formData).subscribe({
      next: (response) => {
      this.router.navigateByUrl('/news-list')},
      error: (error) => console.log(error),
    });
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files: FileList = inputElement.files!;
    const file = files[0];
    this.fileToUpload = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageToShow = reader.result as string;
      this.new.image = reader.result as string
    };
    reader.readAsDataURL(file);
    this.imageIsSelected = true
  }

  deleteNew(){
    const baseUrl = environment.RnAPI;
    this.http.delete(baseUrl + 'deleteNew/' + this.new.id).subscribe((data)=>{
      this.deleteEvent.emit(this.new.id);
    })
  }

  updateNew(){
    const baseUrl = environment.RnAPI;
    this.http.put(baseUrl + 'updateNew/' + this.new.id, this.new).subscribe((data)=>{
      this.drawerClose.emit()
    })
  }

  updateImage(){

    const formData = new FormData();
    formData.append('file', this.fileToUpload!);
    const baseUrl = environment.RnAPI;
    this.http.put(baseUrl + 'updateNewImage/' + this.new.id, formData).subscribe((data)=>{
      this.updateImageEvent.emit(data as New)
    })
  }

}
