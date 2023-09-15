import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';



import { Location } from 'src/app/models/location';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

interface Material {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
  providers: [],
})
export class DataFormComponent implements OnInit {

  toolTips = {
    buildingTitle: 'Dados gerais do edifício como o ano de construção e número de pisos.',
    constructionData: 'Insira o ano de construção do edifício aonde se encontra o compartimento a avaliar.',
    nFloors: 'Insira o número total de pisos do edifício.',
    floorMat: 'Os materiais do piso têm impacto no potencial, pois têm diferentes propriedades.',
    floorBase: 'Escolha um dos materiais que se mais adequa à estrutura base do piso. A estrutura base é o que está por baixo do acabamento, caso tenha acabamento.',
    floorFinish: 'Escolha um dos tipos de acabamento que mais se adequa.',
    wallMat: 'Os materiais das paredes têm impacto no potencial, pois têm diferentes propriedades.',
    wallBase: 'Escolha um dos materiais que se mais adequa à estrutura base da parede. A estrutura base é o que está por baixo do acabamento, caso tenha acabamento.',
    wallFinish: 'Escolha um dos tipos de acabamento que mais se adequa.',
    ventilation: 'Características da ventilação do edifício.',
    ventType: 'Escolha o tipo de ventilação. O tipo de ventilação é como é efetuada a ventilação do compartimento se somente através de janelas (Natural), só por sistemas de ar condicionado (Mecânica) ou pelos dois (Misto)',
    retrofit: 'Se existiu algum tipo de remodelação em que foi instalado novas janelas.',
    floor: 'O piso no edifíco aonde se encontra o compartimento a avaliar.',
    nBellowFloors: 'O número de piso abaixo do compartimento a avaliar, incluindo caves, garagens.',
    email: 'O email servirá para ser enviado um link de acesso para a consulta da avaliação e posteriormente pode inserir alguma leitura para contribuir para o projeto.'
  }


  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  @Input() location!: Location;
  @Input() avaliation!: Avaliation;
  @Input() locationStatus!: boolean;
  @Output() setLocation = new EventEmitter<Location>();
  @Output() setAvaliation = new EventEmitter<Avaliation>();
  @Output() setSubmitState = new EventEmitter<Avaliation>();

  floor_base!: Array<Material>;
  floor_finish!: Array<Material>;
  wall_base!: Array<Material>;
  wall_finish!: Array<Material>;

  //avaliation!: Avaliation;
  isLoading = false
  showLocationSelect = false;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      nBellowFloors: [null, Validators.required],
      floor: [null, Validators.required],
      retrofit: [null, Validators.required],
      ventilation: [null, Validators.required],
      wallBase: [null, Validators.required],
      wallFinish: [null, Validators.required],
      floorBase: [null, Validators.required],
      floorFinish: [null, Validators.required],
      nFloors: [null, Validators.required],
      buildingYear: [null, Validators.required],
    });

    const apiUrl = environment.RnAPI;
    this.http.get<any>(apiUrl + 'floorMaterialBase').subscribe((data) => {
      this.floor_base = data;
    });
    this.http.get<any>(apiUrl + 'floorMaterialFinish').subscribe((data) => {
      this.floor_finish = data;
    });
    this.http.get<any>(apiUrl + 'wallMaterialBase').subscribe((data) => {
      this.wall_base = data;
    });
    this.http.get<any>(apiUrl + 'wallMaterialFinish').subscribe((data) => {
      this.wall_finish = data;
    });

    // this.avaliation = new Avaliation();
    // this.avaliation.Building = new Building();
    // this.avaliation.Location = new Location_();
    // this.avaliation.Room = new Room();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  isSubmited = false;

  minAge = 1400;
  maxAge = 2100;

  bellowValue = 0;

  // date = new FormControl(moment());
  // chosenYearHandler(normalizedYear: Moment, dp: any) {
  //   const ctrlValue = this.date.value;
  //   ctrlValue!.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue);
  //   dp.close();
  //   console.log(this.date.value?.toDate().getFullYear(), ctrlValue);
  //   this.avaliation.building.age = this.date.value!.toDate().getFullYear();
  // }

  chosenYearDate!: Date;

  submitClick() {
    if(this.locationStatus){
      this.showLocationSelect = false
    const apiUrl = environment.RnAPI;
    this.isLoading = true
    this.http.post(apiUrl + 'avaliation', this.avaliation).subscribe((data) => {
      this.avaliation = data as Avaliation;
      this.setSubmitState.emit(this.avaliation);
    },                error => {
      //this.alertService.error(error);
      this.isLoading = false;
     
  })
  }
  else{
    this.showLocationSelect = true
  }
  }
}
