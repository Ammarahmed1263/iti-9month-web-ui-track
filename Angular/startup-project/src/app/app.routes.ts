import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/guest-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () => import('./components/register/register').then((m) => m.RegisterComponent),
  },
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/carousel/carousel').then((m) => m.CarouselComponent),
      },
      {
        path: 'add-task',
        loadComponent: () => import('./components/inputs/inputs').then((m) => m.InputsComponent),
      },
      {
        path: 'my-tasks',
        loadComponent: () =>
          import('./components/task-list/task-list').then((m) => m.TaskListComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((m) => m.NotFoundComponent),
  },
];
