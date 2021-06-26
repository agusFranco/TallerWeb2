import { Injectable } from '@angular/core';
import { User } from 'src/app/common/models/user';

@Injectable()
export class AuthService {
  private user!: User;

  public setUser(user: User): void {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(): User {
    return this.user || null;
  }
}
