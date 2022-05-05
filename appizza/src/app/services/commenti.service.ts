import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiUrl } from '../config/apiUrl';
import { Commento } from '../models/commento';
import { ErrorHttpService } from './error-http.service';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  constructor(private http: HttpClient, private httpError: ErrorHttpService) { }
  getCommenti(): Observable<Commento[]> {
    return this.http.get<Commento[]>(`${apiUrl}commenti`)
      .pipe(catchError(this.httpError.errorHandler));
  }
}
