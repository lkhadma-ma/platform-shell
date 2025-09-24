import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@shared/auth/auth.service';
import { from, switchMap, Observable } from 'rxjs';

export const meInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  return from(authService.authorizationHeader()).pipe(
    switchMap(auth => next(req.clone({ setHeaders: { Authorization: auth } })))
  );
};