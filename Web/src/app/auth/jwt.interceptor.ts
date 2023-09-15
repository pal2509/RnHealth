import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        //let currentUser = this.authenticationService.getUserToken;
        let token = localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: "Bearer " + token
                }
            });
        }

        //aaa
        //Check if error 401 is returned to be redirected to login
        return next.handle(request).pipe( tap(() => {},
        (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
           return;
          }
          this.authenticationService.logout()
        }
      }));
    }
}