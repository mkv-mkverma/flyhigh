import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('isLoggedin')) {
      return true;
    }

    this.router.navigate(['/login-page'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
