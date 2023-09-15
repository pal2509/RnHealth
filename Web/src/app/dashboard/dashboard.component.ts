import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dashCardsStats: dashCards = {
    avaliations: 0,
    readings: 0,
    ratio: 0,
    fScore:0
  };
  graphData!: graphData[];

  options_LineChart: any;
  options_PieChart: any;

  ngOnInit(): void {
    const baseUrl = environment.RnAPI;
    this.http.get(baseUrl + 'getStats').subscribe((data) => {
      this.dashCardsStats = data as dashCards;

      this.options_PieChart = {
        title: {
          text: 'Total de avaliações e leituras',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Tipo',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.dashCardsStats.avaliations, name: 'Avaliações' },
              { value: this.dashCardsStats.readings, name: 'Avaliações "in situ"' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };


    });

    this.http.get(baseUrl + 'getAvaliationReadingsCount').subscribe((data) => {
      this.graphData = data as graphData[];
      const xAxisData = this.graphData.map(obj => obj.date)
      const data1 = this.graphData.map(obj => obj.nAval);
      const data2 = this.graphData.map(obj => obj.nRead);


      this.options_LineChart = {
        legend: {
          data: ['Avaliações', 'Leituras'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: [
          {
            name: 'Avaliações',
            type: 'line',
            data: data1,
            animationDelay: (idx: any) => idx * 10,
          },
          {
            name: 'Leituras',
            type: 'line',
            data: data2,
            animationDelay: (idx: any) => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx: any) => idx * 5,
      };
    });




  }
}

export interface dashCards {
  readings: number;
  avaliations: number;
  ratio: number;
  fScore: number;
}

export interface graphData {
  date: Date;
  nAval: number;
  nRead: number;
}
