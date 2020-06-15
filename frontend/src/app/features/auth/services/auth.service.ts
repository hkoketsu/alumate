import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User, JwtTokenResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string,
    private tokenService: TokenService
  ) {}

  register(username: string, email: string, password: string) {
    console.log('sign up');
    return this.http.post<User>(`${this.baseUrl}/auth/users/`, {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string) {
    console.log('login');
    return this.http
      .post<JwtTokenResponse>(`${this.baseUrl}/auth/jwt/create/`, {
        username,
        password,
      })
      .pipe(
        tap((res) => {
          this.tokenService.setAccessToken(res.access);
          this.tokenService.setRefreshToken(res.refresh);
        }),
        concatMap(() => this.getUser()),
        tap((res) => {
          console.log('set user done');
          this.user = res;
        })
      );
  }

  logout() {
    this.tokenService.removeToken();
  }

  authenticate() {
    return this.tokenService.getAccessToken() !== null;
  }

  getUser() {
    return this.http.get<User>(`${this.baseUrl}/auth/users/me/`);
  }
}
