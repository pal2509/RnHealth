import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

interface MyToken {
  sub: string;
  exp: number;
}

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public currentUser!: BehaviorSubject<string>;

  get isLoggedIn() {
    return this.loggedIn;
  }
  public get getUserToken(): string {
    return this.currentUser.value;
  }

  constructor(private router: Router, private http: HttpClient) {
    //Checking if the user is loggend in
    if (localStorage.getItem('access_token')) {
      var decoded = jwt_decode(
        localStorage.getItem('access_token')!
      ) as MyToken;


      if (decoded.exp < Date.now()) {
        this.currentUser = new BehaviorSubject<string>(
          localStorage.getItem('access_token')!
        );
        this.loggedIn.next(true);
        
      } else {
        this.loggedIn.next(false);
      }
    } else {
      this.loggedIn.next(false);
    }
  }

  //Login funtion
  login(email: string, password: string) {
    const baseUrl = environment.RnAPI;
    const body = new HttpParams()
      .set('username', email)
      .set('password', password);

    return this.http.post<any>(baseUrl + 'token', body).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user.access_token) {
          this.loggedIn.next(true);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('access_token', user.access_token);
        }

        return user;
      })
    );
  }

  //Logout function
  logout() {
    localStorage.removeItem('access_token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
