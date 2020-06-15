import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, map, catchError, switchMap, filter, take } from 'rxjs/operators';
import { TokenService } from 'src/app/features/auth/services/token.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {
    this.refreshTokenSubject = new BehaviorSubject<any>(null);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAccessToken();
    if (token) {
      request = this.addToken(request, token);
    }
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.tokenService.refreshAccessToken().pipe(
        switchMap((res) => {
          console.log('refresh', res);
          this.isRefreshing = false;
          this.refreshTokenSubject.next(res.access);
          return next.handle(this.addToken(request, res.access));
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        tap((token) => console.log('refreshing...', token)),
        filter((token: string) => token != null),
        take(1),
        switchMap((token: string) => {
          return next.handle(this.addToken(request, token));
        }));
    }
  }
}
