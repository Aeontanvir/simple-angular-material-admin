import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiErrorHandler implements HttpInterceptor {
  constructor(
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => { }, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        let message = '';

        if (window.navigator.onLine) {
          if (error.status === 0) {
            message = 'Error - Backend API communication failed!'
          } else {
            message = this.buildErrorMsg(error);
          }
        } else {
          message = 'No internet Connection!'
        }

        // this.snackBar.open(message, 'Close');
        // this.helpers.toastErr(message);
        alert(message);
        console.log('API Error<HttpErrorResponse>', error);

        /* TODO - check if this is needed
        return Observable.throw(error);
        */
      }
    }));
  }

  buildErrorMsg(error) {
    //e.g, for urls like the following, get the string "users"
    //http://localhost/api/users?q=limit=20
    //http://localhost/api/users/1/posts
    const regex = /\/api\/([0-9a-z_-]+)[\/\?]?/i;

    const resourceName = _.capitalize(_.get(regex.exec(error.url), 1));

    const backendMessage = _.join([
      _.get(error, 'error.error.message', _.get(error, 'error.message')),
    ], ' - ')

    return `API (${resourceName}) Error - ${error.status} - ${backendMessage}`;
  }
}
