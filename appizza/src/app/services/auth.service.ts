import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';

const $url = 'http://foodapi.test/api/auth/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: Auth;
  constructor(private http: HttpClient,
              private router: Router
  ) { }
  login(email, psw) {
    const params = new HttpParams()
      .set('email', email)
      .set('psw', psw);
    this.http.get<Auth>(`${$url}`, { params })
      .subscribe(res => {
        this.data = res;
        this.router.navigateByUrl('home');
      });
  }
  logout() {
    this.data = null;
    this.router.navigateByUrl('login');
  }
}
