// An HTTP interceptor is just an Angular service
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // request = request.clone({ url: `${ BASE_PATH }${ request.url }` });
      // return next.handle(proxyReq);
    const token: string = localStorage.getItem('token');
    // const token = 'QpwL5tke4Pnpja7X4';
    // const token = 'QpwL5tke4Pnsdfsds55pja7X4'; // invalid token
    // To intercept the request before it is sent to the server,
    // we need to clone the request object and accordingly add the information we want.
    if (token) {
      // add a custom header
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    if(request.url.startsWith('/data')){
      const url = environment.apiUrl;
      request = request.clone({
             url: url + request.url,
      });
   }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

// This only handle the API response.
// we can handle each and every response from the API
// Calling next.handle means that we are passing control to the next interceptor in the chain, if there is one.
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      // The below code will handle the error response
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error ? error.error.error : '',
          status: error.status
        };
        alert("Reason: "+ data['reason'] +" | Status: "+ data['status']);
        return throwError(error);
      })
    );
  }
}
