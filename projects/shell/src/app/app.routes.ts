import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        title: 'Job Plataform',
        loadComponent: () => import('@domains/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'feeds', 
        loadChildren: () => import('@domains/feed/feature/feed.routes').then(m => m.routes)
    },
    {
        path: 'auth', 
        loadChildren: () => import('@domains/auth/feature/auth.routes').then(m => m.routes)
    },

];
