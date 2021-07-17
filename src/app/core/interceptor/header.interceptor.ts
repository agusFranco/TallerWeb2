import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PagePaths } from 'src/app/common/enums/pagepaths';
import { APIMessage } from 'src/app/common/models/api/apimessage';
import { APIMessageType } from 'src/app/common/models/api/apimessagetype';

import { NavigationService } from '../services/navigation.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private navigationService: NavigationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let _headers = new HttpHeaders();

    const accessToken = sessionStorage.getItem('X-AuthToken');

    _headers = _headers
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*');

    if (accessToken) {
      _headers = _headers.append('Authorization', 'Bearer ' + accessToken);
    }

    request = request.clone({
      headers: _headers,
    });

    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status == 401) {
          return this.handleUnauthorize();
        }

        return throwError(errorResponse);
      })
    );
  }

  private handleUnauthorize() {
    let response = {
      error: {
        messages: [],
      },
    };

    this.navigationService.navigate(PagePaths.Home);
    const unauthorizedError: APIMessage = {
      code: '401',
      text: 'No estas autorizado.',
      type: APIMessageType.Error,
    };
    response.error.messages = [unauthorizedError] as any;
    return throwError(response);
  }
}
