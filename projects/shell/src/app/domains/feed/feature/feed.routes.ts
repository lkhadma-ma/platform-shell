import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '',
        title: 'Feeds',
        loadComponent: () => import('./feed-shell.component').then(m => m.FeedShellComponent),
        loadChildren: () => loadRemoteModule('feed', './POSTS_ROUTES').then(m => m.POSTS_ROUTES)
    }
];
