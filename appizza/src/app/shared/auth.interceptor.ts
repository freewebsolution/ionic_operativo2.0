/* eslint-disable @typescript-eslint/naming-convention */
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenservice: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.tokenservice.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer' + accessToken
      }
    });
    return next.handle(req);

  }
}
