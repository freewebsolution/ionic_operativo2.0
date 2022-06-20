import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export class ErrorIntercept implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse | any) => {
          let msg = '';
          if (error.error instanceof ErrorEvent) {
            if (error.status === 0) {
              msg = 'Applicazione Offline';
            } else {
              // server-side error
              msg = `${error.status} - ${error.statusText || ''} ${error.error.msg}`;
            }
            console.log(msg);
            return throwError(msg);
          }
          console.log(error.message || error);
          return throwError(error.message || error);
        }
        )
      );
  }
}
