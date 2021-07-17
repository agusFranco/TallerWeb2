import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { TimeoutError } from 'rxjs';
import { PagePaths } from '../common/enums/pagepaths';

import { AuthService } from '../core/services/auth.service';
import { NavigationService } from '../core/services/navigation.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    protected naviationService: NavigationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getUser() != null) {
      return true;
    }

    this.naviationService.navigate(PagePaths.Home);
    return false;
  }
}
