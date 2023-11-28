import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  private readonly validUsername = 'admin';
  private readonly validPassword = 'password';
  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    return this.isAuthenticated;
  }

  getisLoggedIn() {
    return this.isAuthenticated;
  }
}
