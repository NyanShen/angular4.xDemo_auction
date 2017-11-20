import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!_.isEmpty(localStorage.getItem('currentUser'))) {
      return true;
    }
    const url: string = state.url;
    localStorage.setItem('currentUrl', url);
    this.router.navigate(['/auction/forbidden']);
    return false;
  }
}
