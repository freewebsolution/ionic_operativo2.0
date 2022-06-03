import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHttpService } from './error-http.service';
import { apiUrl } from '../config/apiUrl';
import { Insalatona } from '../models/insalatona';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InsalatonaService {

  constructor(private http: HttpClient, private httpError: ErrorHttpService) { }
  getInsalatone(): Observable<Insalatona[]> {
    return this.http.get<Insalatona[]>(`${apiUrl}insalatone`)
      .pipe(catchError(this.httpError.errorHandler));
  }
  getInsalataId(id: number): Observable<Insalatona> {
    return this.http.get<Insalatona>(`${apiUrl}insalatone/${id}`)
      .pipe(catchError(this.httpError.errorHandler));
  }
}
