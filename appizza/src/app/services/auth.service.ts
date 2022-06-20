import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const url = 'http://foodapi.test/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(user: User): Observable<any> {
    return this.http.post(`${url}/login`,user);
  }
  register(user: User): Observable<any> {
    return this.http.post(`${url}/register`, user);
  }
  profileUser(): Observable<any> {
    return this.http.get(`${url}/user-profile`);
  }
  logout() {

  }
}
