import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from 'src/app/features/auth/services/token.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.tokenService.getAccessToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(
      tap(
        (res) => {},
        (err) => {
          if (err.status === 401 && this.authService.authenticate()) {
            console.log('refresh token');
            this.tokenService.refreshAccessToken();
          }
        }
      )
    );
  }
}
