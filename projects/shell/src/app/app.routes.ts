import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Job Plataform',
        loadComponent: () => import('@domains/home/home.component').then(m => m.HomeComponent),
    }
];
