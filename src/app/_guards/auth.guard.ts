import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    console.log('checking', 'GUARD');
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      console.warn('YES!', 'GUARD');
      // logged in so return true
        console.log(JSON.parse(currentUser));
        const user = JSON.parse(currentUser).user;
      if (user) {
        return true;
      } else {
        console.warn('NO!', 'GUARD');
          this.router.navigate(['/login']);
        return false;
      }
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
