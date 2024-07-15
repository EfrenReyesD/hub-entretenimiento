import { CanActivateFn, CanMatchFn, RedirectCommand } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const sessionGuard: CanMatchFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if(authService.getAuthToket()) return authService.getAuthToket();
  const rutaTree = router.parseUrl('/login')
  return new RedirectCommand(rutaTree, {skipLocationChange:true})


};
