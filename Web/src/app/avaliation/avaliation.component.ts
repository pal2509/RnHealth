import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Avaliation, Building, Location_, Room } from '../models/avaliation';

@Component({
  selector: 'app-avaliation',
  templateUrl: './avaliation.component.html',
  styleUrls: ['./avaliation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AvaliationComponent implements OnInit, OnChanges  {

  displayedColumns: string[] = ['period', 'value', 'device'];
  @Input() avaliation!: Avaliation;
  location!: Location_;
  building!: Building;
  room!: Room;

  classRecomend!: string;

  classColor = "#000000"

  textValues!: string;
  classText!: string

  ngOnInit(): void {
    //Carregamento dos dados
    switch (this.avaliation.classification) {
      case 0:
        this.classText = "Baixo potencial de radão";
        this.classColor = '#0ebd08'
        this.classRecomend ='O modelo sugere que o potencial do radão é baixo no entanto é sugerido arejar os espaços. Para ter a certeza do potencial terá de fazer uma avaliação no local.'
        break;
      case 1:
        this.classText = "Médio potencial de radão";
        this.classColor = '#f28a0a'
        this.classRecomend ='O modelo aponta para um potencial médio, sendo sugerido arejar os espaços e efetuar uma avaliação no local.'
        break;
      case 2:
        this.classText = "Alto potencial de radão";
        this.classColor = '#e00909'
        this.classRecomend ='O modelo indica que o potencial é elevado, devendo efetuar uma avaliação ao local e tomar medidas de mitigação.'
        break;
      default:
        break;
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if the myInputProperty has changed
    if (changes['avaliation']) {
      // Call your function here
      this.changeClassText();
    }
  }

  // Define your function here
  changeClassText() {
    switch (this.avaliation.classification) {
      case 0:
        this.classText = "Baixo potencial de radão";
        this.classColor = '#0ebd08'
        break;
      case 1:
        this.classText = "Médio potencial de radão";
        this.classColor = '#f28a0a'
        break;
      case 2:
        this.classText = "Alto potencial de radão";
        this.classColor = '#e00909'
        break;
      default:
        break;
    }
  }
}

