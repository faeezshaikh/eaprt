import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(username: string, password: string): boolean {
    // Implement your login logic here
    // For example, make an HTTP request to your backend to verify credentials

    // On successful login:
    this.isAuthenticated.next(true);
    return true;

    // On failure:
    // return false;
  }

  logout() {
    this.isAuthenticated.next(false);
  }

  get isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }
}
