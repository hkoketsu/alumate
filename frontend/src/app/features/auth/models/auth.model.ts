export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthUser {
  username: string;
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  access: string;
}

export interface JwtTokenResponse {
  access: string;
  refresh: string;
}
