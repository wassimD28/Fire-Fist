import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { LoginResponse, User } from '../../models/interfaces/common.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlRegister = 'http://localhost:3000/api/auth/register';
  private apiUrlLogin = 'http://localhost:3000/api/auth/login';
  private apiUrlRefreshToken = 'http://localhost:3000/api/auth/token';
  private apiUrlValidateToken = 'http://localhost:3000/api/auth/validate-token';

  private ACCESS_TOKEN_KEY = 'access_token';
  private REFRESH_TOKEN_KEY = 'refresh_token';
  private USERNAME_KEY = 'username';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlRegister, user);
  }

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrlLogin, user).pipe(
      tap((response: LoginResponse) => {
        if (response.accessToken && response.refreshToken) {
          this.saveToken(response.accessToken, response.refreshToken);
          this.saveUsername(user.username);
        }
      })
    );
  }

  validateToken(token: string): Observable<boolean> {
    return this.http.post<{ valid: boolean }>(this.apiUrlValidateToken, { token }).pipe(
      map(response => response.valid),
      catchError(() => of(false))
    );
  }

  private saveToken(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
  }

  private saveUsername(username: string): void {
    localStorage.setItem(this.USERNAME_KEY, username);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    const token = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    console.log('Retrieved Access Token:', token);
    return token
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }
}
