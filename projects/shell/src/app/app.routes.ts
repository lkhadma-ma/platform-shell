import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        title: 'Job Plataform',
        loadComponent: () => import('@domains/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'lk',
        loadComponent: () => import('@shared/ui/shell/shell.component').then(m => m.ShellComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'feeds'
            },
            {
                path: 'feeds',
                loadChildren: () => loadRemoteModule('feed', './POSTS_ROUTES').then(m => m.POSTS_ROUTES)
            },
            {
                path: ':username',
                loadChildren: () => import('@domains/profile/feature/profile.routes').then(m => m.PROFILE_ROUTES)    
            },
            {
                path: 'p/:username',
                loadChildren: () => loadRemoteModule('user', './ME_ROUTES').then(m => m.ME_ROUTES)
            },
            {
                path: 'c/:username',
                loadChildren: () => loadRemoteModule('company', './ME_ROUTES').then(m => m.ME_ROUTES)
            }
              
        ]
    },
    {
        path: 'auth', 
        loadComponent: () => import('@shared/ui/empty-shell/empty-shell.component').then(m => m.EmptyShellComponent),
        loadChildren: () => loadRemoteModule('auth', './AUTH_ROUTES').then(m => m.AUTH_ROUTES)
    },

];
