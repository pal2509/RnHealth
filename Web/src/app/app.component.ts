import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isLoggedIn$!: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(x => this.isLoggedIn$ = x);
  }
  title = 'RnHealthWeb';

  

  ngOnInit() {
  }

  homeClick() {
    this.router.navigateByUrl('/home');
  }
  avaliationClick() {
    this.router.navigateByUrl('/avaliation-info');
  }
  readingClick() {
    this.router.navigateByUrl('/readings');
  }
  readingListClick() {
    this.router.navigateByUrl('/reading-list');
  }

  avaliationListClick() {
    this.router.navigateByUrl('/avaliation-list');
  }

  radonClick(){
    this.router.navigateByUrl('/radon');
  }

  LocationsClick() {
    this.router.navigateByUrl('/locations');
  }

  NewsClick(){
    this.router.navigateByUrl('/news-list');
  }
  dashboardClick() {
    this.router.navigateByUrl('/dashboard');
  }
  nustDashboardClick() {
    this.router.navigateByUrl('/nuts-dashboard');
  }
  loginClick() {
    this.router.navigateByUrl('/login');
  }
  logoutClick() {
    this.authService.logout();
  }
}
