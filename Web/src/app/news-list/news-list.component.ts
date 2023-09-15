import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';
import { New } from '../models/new';
import { HttpClient } from '@angular/common/http';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CreateNewsFormComponent } from '../create-news-form/create-news-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'created_At',
    'title',
    'mainText'
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataLength = 0;

  selectedDateStart: Date | null = null;
  selectedDateEnd: Date | null = null;

  dataSource!: MatTableDataSource<New>;

  selectedNew!: New;
  news!: New[]
  submitState!: boolean

  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('myPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild('myTable') table!: MatTable<any>;

  @ViewChild(CreateNewsFormComponent) childComponent!: CreateNewsFormComponent;


  ngOnInit(): void {
    const baseUrl = environment.RnAPI;
    this.http.get(baseUrl + 'getAllNews').subscribe((data) => {
      this.dataLength = (data as New[]).length;
      this.dataSource = new MatTableDataSource(data as New[]);
      this.selectedNew = this.dataSource.data[0];
      //   this.dataSource.sortingDataAccessor = (
      //     reading: New,
      //     property: string
      //   ) => {
      //     switch (property) {
      //       case 'reading.value':
      //         return +reading.reading.values;
      //       default:
      //         return reading[property];
      //     }
      //   };

      this.news = data as New[]
      this.news.forEach((element,i) => {
        
        this.http.get(baseUrl + 'getImages/' + element.image,{responseType: 'blob'}).subscribe((data) =>{
          this.createImageFromBlob(data as Blob, element)

        })
      });

    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator;
    }, 500);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  drawerToggle()
  {this.drawer.toggle()}

  selectNew(news: New){
    if(news == this.selectedNew){
      this.drawerToggle()
      this.submitState = false;
    }
    else{
      this.selectedNew = news
    }
  }
  createImageFromBlob(image: Blob, n: New) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        n.image = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  deleteEvent(n: string) {
    this.dataSource.data = this.dataSource.data.filter(
      row => row.id!=n
   );
   this.drawer.toggle()
  }

  updateImageEvent(n: New) {
    const baseUrl = environment.RnAPI
    this.http.get(baseUrl + 'getNew/'+ n.id).subscribe((data) => {
      this.selectedNew = data as New
      this.http.get(baseUrl + 'getImages/' + n.image,{responseType: 'blob'}).subscribe((data) =>{
        const updatedData = this.dataSource.data.map(item => {
          this.createImageFromBlob(data as Blob, this.selectedNew)
          if (item.id === this.selectedNew.id) {
            this.createImageFromBlob(data as Blob, item)
          }
          return item;
        });
        this.drawerToggle()
      })

    });

  }

  navigateToSubmitNew(){
    this.router.navigateByUrl('/submit-new')
  }

}
