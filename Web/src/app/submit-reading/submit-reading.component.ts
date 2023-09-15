import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Avaliation, Reading } from '../models/avaliation';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-submit-reading',
  templateUrl: './submit-reading.component.html',
  styleUrls: ['./submit-reading.component.css'],
})
export class SubmitReadingComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public dialogRef: MatDialogRef<SubmitReadingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Avaliation
  ) {}

  reading: Reading = new Reading();
  typeOfRoom: string = '';
  ocupation!: number;
  floor!: number;
  deviceName!: string;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      rnValue: [null, [Validators.required]],
      device: [null, [Validators.required]],
      typeOfRoom: [null],
      floor: [null],
      ocupation: [null],
      deviceName: [null],
    });
  }

  submitReading() {
    const baseUrl = environment.RnAPI;
    if (this.form.valid) {
      this.http
        .post(baseUrl + 'reading/' + this.data.id, {
          device: this.form.value.device,
          value: this.form.value.rnValue,
          endDate: this.form.value.endDate.toISOString(),
          startDate: this.form.value.startDate.toISOString(),
          typeOfRoom: this.form.value.typeOfRoom,
          ocupation: this.form.value.ocupation,
          floor: this.form.value.floor,
          deviceName: this.form.value.deviceName,
        })
        .subscribe((data) => {
          this.dialogRef.close(data as Avaliation);
        });
    }
  }
}
