import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

interface JwtTokenResponse {
  access: string;
  refresh: string;
}

interface SignupResponse {
  id: number;
  username: string;
  email: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string,
    private tokenService: TokenService,
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
      .post<JwtTokenResponse>(`${this.baseUrl}/auth/jwt/create/`, {
        username,
        password,
      })
      .pipe(tap((res) => {
        this.tokenService.setAccessToken(res.access);
        this.tokenService.setRefreshToken(res.refresh);
      }));
  }

  logout() {
    this.tokenService.removeToken();
  }

  authenticate() {
    return this.tokenService.getAccessToken() !== null;
  }

  getUser(id: number) {
    return this.http.get(`${this.baseUrl}/auth/users/${id}/`);
  }
  
}
