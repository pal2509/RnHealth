import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent {

  constructor(private router: Router){}

  avaliationClick(){
    this.router.navigateByUrl('/avaliation')
  }

}
