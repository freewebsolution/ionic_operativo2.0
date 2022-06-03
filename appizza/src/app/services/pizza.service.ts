import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHttpService } from './error-http.service';
import { apiUrl } from '../config/apiUrl';
import { Pizza } from '../models/pizza';
import { catchError } from 'rxjs/operators';
import { Commento } from '../models/commento';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient, private httpError: ErrorHttpService) { }
  getPizze(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${apiUrl}pizze`)
      .pipe(catchError(this.httpError.errorHandler));
  }
  getPizzaId(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${apiUrl}pizze/${id}`)
      .pipe(catchError(this.httpError.errorHandler));
  }

  getCommentiId(id: number): Observable<Commento[]> {
    return this.http.get<Commento[]>(`${apiUrl}commenti/${id}`)
      .pipe(catchError(this.httpError.errorHandler));
  }
}
