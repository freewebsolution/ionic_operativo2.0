/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { TokenService } from './token.service';

const url = 'http://foodapi.test/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }
  login(user: User): Observable<any> {
    return this.http.post(`${url}/login`, user);
  }
  register(user: User): Observable<any> {
    return this.http.post(`${url}/register`, user);
  }
  profileUser(): Observable<any> {
    if(this.token.isLoggedIn()){
      return this.http.get(`${url}/user-profile`);
    }
    return;
  }

  logout() {

  }
}
