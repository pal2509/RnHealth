import { LiveAnnouncer } from '@angular/cdk/a11y';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import {
  MatSort,
  MatSortable,
  Sort,
  SortDirection,
} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';
import {
  CellClickedEvent,
  ColDef,
  ColGroupDef,
  GridOptions,
  GridReadyEvent,
  IDateFilterParams,
  IFilterParams,
  INumberFilterParams,
  ValueFormatterParams,
  ValueGetterParams,
} from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { exportToCSV, flattenObject } from '../utils/utilFunctions';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css'],
})
export class ReadingListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  //----------------------------------------------------------------

  filterParams: IDateFilterParams = {
    comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;

      var cellDate = new Date(cellValue);

      if (filterLocalDateAtMidnight.getDate() === cellDate.getDate()) {
        return 0;
      }

      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }

      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
    minValidYear: 2000,
    maxValidYear: 2030,
    inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
  };

  // Each Column Definition results in one Column.
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'created_At',
      headerName: 'Data da avaliação',
      filter: 'agDateColumnFilter',
      filterParams: this.filterParams,
      valueFormatter: this.dateFormatter,
    },
    {
      field: 'reading',
      headerName: 'Data da leitura',
      filter: 'agDateColumnFilter',
      filterParams: this.filterParams,
      valueFormatter: this.dateFormatter,
      valueGetter: this.readingDateValueGetter
    },
    {
      field: 'classification',
      headerName: 'Classificação',
      valueGetter: this.classificationValueGetter,
    },
    {
      field: 'reading',
      headerName: 'Valor',
      valueGetter: this.readingValueGetter,
      filter: 'agNumberColumnFilter',
    },
    {
      headerClass: 'location',
      headerName: 'Localização',
      children: [
        {
          field: 'location.gamaValue',
          headerName: 'Valor Gama',
          valueGetter: this.gammaValueGetter,
          filter: 'agNumberColumnFilter',
        },
        { field: 'location.city', headerName: 'Cidade' },
        { field: 'location.postCode', headerName: 'Código Postal' },
        { field: 'location.address', headerName: 'Rua' },
        {
          field: 'location.latitude',
          headerName: 'Latitude',
          filter: 'agNumberColumnFilter',
        },
        {
          field: 'location.longitude',
          headerName: 'Longitude',
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerClass: 'building',
      headerName: 'Edifício',
      children: [
        {
          field: 'building.age',
          headerName: 'Ano de construção',
          filter: 'agNumberColumnFilter',
        },
        {
          field: 'building.nFloors',
          headerName: 'Nº Pisos',
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerClass: 'room',
      headerName: 'Sala',
      children: [
        {
          field: 'room.floor',
          headerName: 'Piso',
          filter: 'agNumberColumnFilter',
        },
        {
          field: 'room.nBellowFloors',
          headerName: 'Pisos abaixo',
          filter: 'agNumberColumnFilter',
        },
        { field: 'room.floorBase', headerName: 'Base do piso' },
        { field: 'room.floorFinish', headerName: 'Acabamento do piso' },
        { field: 'room.wallBase', headerName: 'Base da parede' },
        { field: 'room.wallFinish', headerName: 'Acabamento da parede' },
        { field: 'room.ventilation', headerName: 'Ventilação' },
        {
          field: 'room.retrofit',
          headerName: 'Retrofit',
          valueGetter: (params) => {
            return params.data.room.retrofit == 1 ? 'Sim' : 'Não';
          },
        },
      ],
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  public gridOptions: GridOptions = {
    suppressCellFocus: true
  }

  // Data that gets displayed in the grid
  public rowData$!: Observable<Avaliation[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  selectedAvaliation!: Avaliation;

  @ViewChild('drawer') drawer!: MatDrawer;

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    const baseUrl = environment.RnAPI;
    this.rowData$ = this.http.get<Avaliation[]>(baseUrl + 'getAllReadings');
    this.agGrid.suppressCellFocus = true;
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    this.selectAvaliation(e.data);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
    this.drawer.close();
  }

  dateFormatter(params: ValueFormatterParams) {
    const date = formatDate(new Date(params.value), 'dd-MM-yyyy', 'en-GB');
    return date;
  }

  readingValueGetter(params: ValueGetterParams) {
    return params.data.reading[0].value;
  }

  readingDateValueGetter(params: ValueGetterParams) {
    return params.data.reading[0].startDate;
  }
  gammaValueGetter(params: ValueGetterParams) {
    return params.data.location.gamaValue;
  }

  classificationValueGetter(params: ValueGetterParams) {
    switch (params.data.classification) {
      case 0:
        return 'Baixo';

      case 1:
        return 'Médio';

      case 2:
        return 'Alto';

      default:
        return '';
    }
  }

  public getClassificationText(classification: number) {
    switch (classification) {
      case 0:
        return ['Baixo', '#0ebd08'];

      case 1:
        return ['Médio', '#f28a0a'];

      case 2:
        return ['Alto', '#e00909'];

      default:
        return '';
    }
  }

  drawerToggle() {
    this.drawer.toggle();
  }

  selectAvaliation(avaliation: Avaliation) {
    if (avaliation == this.selectedAvaliation) {
      this.drawerToggle();
    } else {
      this.selectedAvaliation = avaliation;
    }
  }

  ExportData() {
    let data:any = []
    this.agGrid.api.forEachNodeAfterFilterAndSort(node => data.push(flattenObject(node.data)));
    exportToCSV(data, 'Readings')
  }


 
}
