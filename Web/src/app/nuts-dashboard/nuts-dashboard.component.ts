import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ColDef,
  ColGroupDef,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import echarts from 'echarts/types/dist/echarts';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuts-dashboard',
  templateUrl: './nuts-dashboard.component.html',
  styleUrls: ['./nuts-dashboard.component.css'],
})
export class NutsDashboardComponent implements OnInit {
  constructor(private http: HttpClient) {}
  options_nuts_chart_rn: any;
  options_nuts_chart_gamma: any;

  // Each Column Definition results in one Column.
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'nutsI',
      headerName: 'NUTS I',
    },
    {
      field: 'nutsII',
      headerName: 'NUTS II',
    },
    {
      field: 'nutsIII',
      headerName: 'NUTS III',
    },
    {
      field: 'total',
      headerName: 'Total',
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'valueRn',
      headerName: 'Radão',
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'valueGamma',
      headerName: 'Gamma',
      filter: 'agNumberColumnFilter',
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  public gridOptions: GridOptions = {
    suppressCellFocus: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<IOTableData[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  ngOnInit(): void {
    this.loadGraphGamma('nutsII');
    this.loadGraphRn('nutsII');
  }

  loadGraphGamma(location: string) {
    const baseUrl = environment.RnAPI;
    this.http
      .get(baseUrl + 'getNutsStats?location=' + location + '&field=valueRn')
      .subscribe((data: any) => {
        this.options_nuts_chart_rn = {
          title: [
            {
              text:
                'Valores médios do radão por região ' +
                this.getStringDisplay(location),
              left: 'center',
            },
          ],
          dataset: [
            {
              // prettier-ignore
              source: data['values'],
            },
            {
              transform: {
                type: 'boxplot',
                config: {
                  itemNameFormatter: function (params: any) {
                    return data['keys'][params.value];
                  },
                },
              },
            },
            {
              fromDatasetIndex: 1,
              fromTransformResult: 1,
            },
          ],
          tooltip: {
            formatter: function (params: any) {
              var boxData = params.data;
              return (
                'Min: ' +
                boxData[1] +
                '<br/>Q1: ' +
                boxData[2] +
                '<br/>Median: ' +
                boxData[3] +
                '<br/>Q3: ' +
                boxData[4] +
                '<br/>Max: ' +
                boxData[5]
              );
            },
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '5%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0, // Display all labels
              rotate: 45// Rotate labels for better visibility
            },
          },
          yAxis: {
            type: 'value',
            name: 'Bq/m3',
            splitArea: {
              show: true,
            },
          },
          series: [
            {
              name: 'boxplot',
              type: 'boxplot',
              datasetIndex: 1,
            },
            {
              name: 'outlier',
              type: 'scatter',
              datasetIndex: 2,
            },
          ],
        };
      });
  }

  loadGraphRn(location: string) {
    const baseUrl = environment.RnAPI;
    this.http
      .get(baseUrl + 'getNutsStats?location=' + location + '&field=gammaValue')
      .subscribe((data: any) => {
        this.options_nuts_chart_gamma = {
          title: [
            {
              text:
                'Valores do gama por região ' + this.getStringDisplay(location),
              left: 'center',
            },
          ],
          dataset: [
            {
              // prettier-ignore
              source: data["values"],
            },
            {
              transform: {
                type: 'boxplot',
                config: {
                  itemNameFormatter: function (params: any) {
                    return data['keys'][params.value];
                  },
                },
              },
            },
            {
              fromDatasetIndex: 1,
              fromTransformResult: 1,
            },
          ],
          tooltip: {
            formatter: function (params: any) {
              var boxData = params.data;
              return (
                'Min: ' +
                boxData[1] +
                '<br/>Q1: ' +
                boxData[2] +
                '<br/>Median: ' +
                boxData[3] +
                '<br/>Q3: ' +
                boxData[4] +
                '<br/>Max: ' +
                boxData[5]
              );
            },
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '2%',
            containLabel: true,
            
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 45// Display all labels
              // Rotate labels for better visibility
            },
          },
          yAxis: {
            type: 'value',
            name: 'Gy/h',
            splitArea: {
              show: true,
            },
          },
          series: [
            {
              name: 'boxplot',
              type: 'boxplot',
              datasetIndex: 1,
            },
            {
              name: 'outlier',
              type: 'scatter',
              datasetIndex: 2,
            },
          ],
        };
      });
  }

  LoadNuts(location: string) {
    this.loadGraphRn(location);
    this.loadGraphGamma(location);
    this.LoadTable(location)
  }

  getStringDisplay(location: string) {
    switch (location) {
      case 'nutsI':
        return 'NUTS I';
      case 'nutsII':
        return 'NUTS II';
      case 'nutsIII':
        return 'NUTS III';

      default:
        return '';
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.LoadTable('nutsII');
  }

  LoadTable(location: string) {
    const baseUrl = environment.RnAPI;
    this.rowData$ = this.http.get<IOTableData[]>(
      baseUrl + 'getNutsTable?location=' + location
    );
    switch (location) {
      case 'nutsI':
        this.gridOptions.columnApi?.setColumnVisible('nutsI', true);
        this.gridOptions.columnApi?.setColumnVisible('nutsII', false);
        this.gridOptions.columnApi?.setColumnVisible('nutsIII', false);
        break;
      case 'nutsII':
        this.gridOptions.columnApi?.setColumnVisible('nutsI', false);
        this.gridOptions.columnApi?.setColumnVisible('nutsII', true);
        this.gridOptions.columnApi?.setColumnVisible('nutsIII', false);
        break;
      case 'nutsIII':
        this.gridOptions.columnApi?.setColumnVisible('nutsI', false);
        this.gridOptions.columnApi?.setColumnVisible('nutsII', false);
        this.gridOptions.columnApi?.setColumnVisible('nutsIII', true);
        break;
      default:
        this.gridOptions.columnApi?.setColumnVisible('nutsI', true);
        this.gridOptions.columnApi?.setColumnVisible('nutsII', true);
        this.gridOptions.columnApi?.setColumnVisible('nutsIII', true);
        break;
    }

    this.agGrid.suppressCellFocus = true;
  }
}

interface IOTableData {
  nutI: string;
  nutII: string;
  nutIII: string;
  total: number;
  valueRn: number;
  valueGamma: number;
}
