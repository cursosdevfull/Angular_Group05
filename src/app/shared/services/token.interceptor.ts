import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { AbstractStorage } from './abstract-storage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: AbstractStorage,
    private readonly injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.storage.get('accessToken');

    const clone = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    const authService = this.injector.get(AuthService);

    return next.handle(clone).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
        } else if (error.status === 409) {
          return authService.getNewAccessToken().pipe(
            retry(3),
            mergeMap((response: any) => {
              this.storage.save('accessToken', response.accessToken);

              const newRequestClone = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });

              return next.handle(newRequestClone);
            })
          );
        } else if (error.status === 401) {
          authService.logout();
        } else {
          if (error.error && error.error.result) {
            console.log('ocurrió un error');
          }
        }
        return throwError(error.error.result);
      })
    );
  }
}
