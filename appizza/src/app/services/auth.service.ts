import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const url = 'http://foodapi.test/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(user: User): Observable<any> {
    return this.http.post(`${url}/login`,user);
  }
  register(user: User): Observable<any> {
    return this.http.post(`${url}/register`, user);
  }
  profileUser(user: User): Observable<any> {
    return this.http.post(`${url}/profile-user`, user);
  }
  logout() {

  }
  isLogged() {
    // const isAuth = this.data && this.data.access_token ? true : false;
    // return isAuth;
  }
}
