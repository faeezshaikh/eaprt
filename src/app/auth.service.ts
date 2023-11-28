import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  private readonly validUsername = '484007';
  private readonly validPassword = 'sduQvuLI';
  private readonly storageKey = '_athu';
  constructor(private router: Router) {
    this.checkAuthentication();
   }


  private checkAuthentication() {
    const storedToken = localStorage.getItem(this.storageKey);
    if (storedToken) {
      // TODO: Decode or validate the token as needed
      this.isAuthenticated = true;
    }
  }

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      const token = btoa(username); // TODO: Simple encoding; consider a more secure method
      localStorage.setItem(this.storageKey, token);
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem(this.storageKey);
    // this.router.navigate(['/login'], { reload: true });
    this.router.navigateByUrl('/login');
    return this.isAuthenticated;
  }

  getisLoggedIn() {
    return this.isAuthenticated;
  }
}
