import { Injectable } from '@angular/core';
import { User } from 'src/app/common/models/user';

@Injectable()
export class AuthService {
  private user!: User | null;

  constructor() {
    let user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
  }

  public clearSession(): void {
    this.user = null;
    sessionStorage.clear();
  }

  public setUser(user: User): void {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public setToken(jwtToken: string): void {
    sessionStorage.setItem('X-AuthToken', jwtToken);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('X-AuthToken') || null;
  }

  public getUser(): User | null {
    return this.user || null;
  }
}
