import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userExists = localStorage.getItem('user');

  if (userExists) {
    return router.createUrlTree(['/home']);
  }

  return true;
};
