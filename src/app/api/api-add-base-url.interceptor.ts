import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BACKEND_API_URL } from '../app.constants';



export class APIAddBaseUrlInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const regx = /^(http|\/\/)/; //starts with http or https or //

    if (!request || !request.url || regx.test(request.url)) {
      return next.handle(request);
    }

    request = request.clone({
      url: `${BACKEND_API_URL}${request.url}`
    });

    return next.handle(request);
  }
}
