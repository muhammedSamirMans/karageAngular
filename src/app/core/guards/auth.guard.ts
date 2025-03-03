import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
 

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router); 
  if (authService.getToken()) {
    return true; 
  } 
  else
  { 
  // Redirect to login
    router.navigate(['/']);
    return false;
  }
};