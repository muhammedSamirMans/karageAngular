import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  // Method to set the token (e.g., after login)
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token); // Optionally store in localStorage
  }

  // Method to get the token
  getToken(): string | null {
    return this.token || localStorage.getItem('authToken'); // Retrieve from localStorage
  }

  // Method to clear the token (e.g., after logout)
  clearToken(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }
}