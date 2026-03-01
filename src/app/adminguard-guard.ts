import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebClientService } from '../web-client-service';

export const adminguardGuard: CanActivateFn = (route, state) => {
  const webclient = inject(WebClientService);
  const router = inject(Router);
  const aid = webclient.isAdminLogedIn();

  if (aid != null) {
    return true;
  } else {
    router.navigate(['/adminlgoin']);
    return false;
  }
};
