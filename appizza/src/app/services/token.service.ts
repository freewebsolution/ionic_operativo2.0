import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private issuer = {
    login: 'http://foodapi.test/api/auth/login',
    register: 'http://foodapi.test/api/auth/register'
  };
  constructor() { }
  handleData(token: any) {
    localStorage.setItem('auth_token', token);
    setTimeout(this.removeToken, 1000 * 60 * 60);
  }
  getToken() {
    return localStorage.getItem('auth_token');
  }
  isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true : false;
      }
    } else {
      return false;
    }
  }
  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  isLoggedIn() {
    return this.isValidToken();
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
