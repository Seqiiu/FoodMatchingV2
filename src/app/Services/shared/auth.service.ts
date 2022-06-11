import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { RefreshToken } from './refreshToken';
import { Endpoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  endpoint = Endpoint;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};



  constructor(private http: HttpClient, public router: Router) {}

  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}api/Account/RegisterUser`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}Api/Account/AuthToken`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('refrash_token',res.refreshToken);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/']);
        });
      });
  }
  Refrashtoken(refreshToken: RefreshToken){
    return this.http
    .post<any>(`${this.endpoint}api/Account/RefreshToken`, refreshToken)
    .subscribe((res:any) =>{
      if(res.isSuccess == true){
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('refrash_token',res.refreshToken);
        this.getUserProfile(res._id).subscribe((res) => 
        {
          this.currentUser = res;
        })};
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
     removeToken = localStorage.removeItem('refrash_token')
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}api/Recipe/2`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
