import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).map(event => {
      if (event instanceof HttpResponse) {
        switch (event.status) {
          case 401:
            // expired jwt go to login
            break;
          case 404:
            // not found
            break;
          case 403:
            // forbidden
            break;
          case 500:
            // service inner error
            break;
          default:
            console.log('data return successfully!');
        }
      }
      return event;
    });
  }
}
