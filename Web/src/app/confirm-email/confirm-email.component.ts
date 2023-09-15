import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent {

  constructor (private http: HttpClient){}

  @Input() avaliation!: Avaliation;
  @Output() setEmailState = new EventEmitter<Avaliation>();

  form: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  changeEmailClick(){
    this.form=true;
  }

  confirmEmailClick(){
    const baseUrl = environment.RnAPI
    this.http.put(baseUrl + 'confirmEmail/' + this.avaliation.id, this.avaliation).subscribe((data)=>{
      this.avaliation = data as Avaliation
      this.setEmailState.emit(this.avaliation);
    })
  }
  updateEmailClick(){
    const baseUrl = environment.RnAPI
    this.http.put(baseUrl + 'updateEmail/' + this.avaliation.id, this.avaliation).subscribe((data)=>{
      this.avaliation = data as Avaliation
      this.form = false
      this.setEmailState.emit(this.avaliation);
    })

  }

}
