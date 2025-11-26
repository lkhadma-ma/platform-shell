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
                redirectTo: 'feed'
            },
            {
                path: 'feed',
                loadChildren: () => loadRemoteModule('feed', './POSTS_ROUTES').then(m => m.POSTS_ROUTES)
            },
            {
                path: 'search',
                loadChildren: () => loadRemoteModule('search', './SEARCH_ALL_ROUTES').then(m => m.SEARCH_ALL_ROUTES)
            },
            {
                path: 'jobs',
                loadChildren: () => loadRemoteModule('search', './SEARCH_JOB_ROUTES').then(m => m.SEARCH_JOB_ROUTES)
            },
            {
                path: 'applied-jobs',
                loadChildren: () => loadRemoteModule('user', './APPLIED_JOBS_ROUTES').then(m => m.APPLIED_JOBS_ROUTES)
            },
            {
                path: 'applied-jobs/:jobId',
                loadChildren: () => loadRemoteModule('company', './APPLIED_JOBS_ROUTES').then(m => m.APPLIED_JOBS_ROUTES)
            },
            {
                path: ':username',
                loadChildren: () => import('@domains/profile/feature/profile.routes').then(m => m.PROFILE_ROUTES)    
            },
              
        ]
    },
    {
        path: 'auth', 
        loadComponent: () => import('@shared/ui/empty-shell/empty-shell.component').then(m => m.EmptyShellComponent),
        loadChildren: () => loadRemoteModule('auth', './AUTH_ROUTES').then(m => m.AUTH_ROUTES)
    },

];
