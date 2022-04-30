import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ErrorHttpService {

  constructor() { }

  public errorHandler(error: HttpErrorResponse | any) {
    let msg: string;

    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        msg = 'Applicazione Offline';
      } else {
        msg = `${error.status} - ${error.statusText || ''} ${error.error.msg}`;
      }
      return throwError(msg);
    }

    return throwError(error.message || error);
  }

}
