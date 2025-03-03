import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config'; 
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
  provideAnimations(),
  provideZoneChangeDetection({ eventCoalescing: true }), providePrimeNG({theme: {preset: Aura}}), provideRouter(routes),
  provideClientHydration(withEventReplay()),
  provideHttpClient(
  withInterceptors([authInterceptor]) 
),
]
};
