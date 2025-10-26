import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBx4JaidDuAlJPtIfWGvc6xc7feBKOMz0M",
      authDomain: "authentication-lkhadma-ma.firebaseapp.com",
      projectId: "authentication-lkhadma-ma",
      storageBucket: "authentication-lkhadma-ma.firebasestorage.app",
      messagingSenderId: "21675652332",
      appId: "1:21675652332:web:41a32ad4633b0be3a6e1c9",
      measurementId: "G-SXWBJ45FPY"
    })),
    provideAuth(() => getAuth()),
  ]
};
