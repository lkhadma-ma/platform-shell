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
        loadComponent: () => import('@shared/ui/shell/shell.component').then(m => m.ShellComponent),
        loadChildren: () => loadRemoteModule('feed', './POSTS_ROUTES').then(m => m.POSTS_ROUTES)
    },
    {
        path: 'me',
        loadComponent: () => import('@shared/ui/shell/shell.component').then(m => m.ShellComponent),
        loadChildren: () => loadRemoteModule('user', './ME_ROUTES').then(m => m.ME_ROUTES)
    },
    {
        path: 'auth/login', 
        loadComponent: () => import('@shared/ui/empty-shell/empty-shell.component').then(m => m.EmptyShellComponent),
        loadChildren: () => loadRemoteModule('auth', './AUTH_ROUTES').then(m => m.AUTH_ROUTES)
    },

];
