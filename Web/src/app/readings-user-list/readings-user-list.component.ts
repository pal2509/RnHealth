import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Avaliation } from '../models/avaliation';
import { SubmitReadingComponent } from '../submit-reading/submit-reading.component';

@Component({
  selector: 'app-readings-user-list',
  templateUrl: './readings-user-list.component.html',
  styleUrls: ['./readings-user-list.component.css'],
})
export class ReadingsUserListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.email = this.route.snapshot.paramMap.get('email')!;
    if (window.innerWidth < 768) {
      this.pageSize = 3
      this.dialogWidth = 100
    }
  }

  avaliations!: Avaliation[];
  dataLength = 0
  email!: string;

  selectedAvaliation!: Avaliation;
  selectedCardIndex!: number;
  currentPageIndex: number = 0;
  pageSize = 9;
  pageEvent!: PageEvent;

  dialogWidth = 50

  ngOnInit(): void {
    const baseUrl = environment.RnAPI;
    this.http
      .get(baseUrl + 'getReadingsByEmail/' + this.email)
      .subscribe((data) => {
        this.avaliations = data as Avaliation[];
        this.selectedAvaliation = this.avaliations[0];
        this.selectedCardIndex = 0;
        this.dataLength = this.avaliations.length
      });
  }

  selectAvaliation(avaliation: Avaliation) {
    this.selectedAvaliation = avaliation;
  }

  onPageChanged(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
  }

  addReading(): void {
    const dialogRef = this.dialog.open(SubmitReadingComponent, {
      width:this.dialogWidth + '%',
      height: '600px',
      data: this.selectedAvaliation,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result !=undefined){
      this.selectedAvaliation = result;
      this.avaliations[this.selectedCardIndex] = this.selectedAvaliation;
      }
    });
  }
}
