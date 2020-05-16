import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  access: string;
  refresh: string;
}

interface SignupResponse {
  id: number;
  username: string;
  email: string;
}

interface RefreshTokenResponse {
  access: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}

  register(username: string, email: string, password: string) {
    console.log('sign up');
    return this.http.post<SignupResponse>(`${this.baseUrl}/auth/users/`, {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string) {
    console.log('login');
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/auth/jwt/create/`, {
        username,
        password,
      })
      .pipe(tap((res) => this.setAccessToken(res.access)));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  authenticate() {
    return localStorage.getItem('access_token') !== null;
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  setAccessToken(token: string) {
    return localStorage.setItem('access_token', token);
  }

  refreshJwtSession() {
    return this.http
      .post<RefreshTokenResponse>(`${this.baseUrl}/auth/jwt/refresh`, {
        refresh: this.getAccessToken(),
      })
      .pipe(
        tap((res) => {
          this.setAccessToken(res.access);
        })
      );
  }
}
