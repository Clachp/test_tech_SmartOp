import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SurgeonsService } from '../services';
import { inject } from '@angular/core';

export const surgeonExistsGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const surgeonsService = inject(SurgeonsService);
  let exists: boolean
  surgeonsService.isSurgeonsExistsSub.subscribe(val => {
    exists = val
  })
  return surgeonsService.isSurgeonsExists;
};
