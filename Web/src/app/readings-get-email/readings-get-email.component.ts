import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { MyErrorStateMatcher } from '../data-form/data-form.component';
import { Avaliation } from '../models/avaliation';

@Component({
  selector: 'app-readings-get-email',
  templateUrl: './readings-get-email.component.html',
  styleUrls: ['./readings-get-email.component.css']
})
export class ReadingsGetEmailComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute, private http: HttpClient ) {}
  form!: FormGroup;

  email = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });


  }

  searchClick(){
    const baseUrl = environment.RnAPI;

    this.http
      .get(baseUrl + 'getReadingsByEmail/' + this.email)
      .subscribe((data) => {
        if((data as Avaliation[]).length > 0)
        {
          this.router.navigateByUrl('readings/' + this.email)
        }

      });


    
  }
}
