import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefreshTokenResponse } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) { }

  refreshAccessToken() {
    console.log(this.getAccessToken());
    return this.http
      .post<RefreshTokenResponse>(`${this.baseUrl}/auth/jwt/refresh`, {
        refresh: this.getRefreshToken(),
      })
      .pipe(
        tap((res) => {
          this.setAccessToken(res.access);
        })
      );
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  setRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
  }

  removeToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
