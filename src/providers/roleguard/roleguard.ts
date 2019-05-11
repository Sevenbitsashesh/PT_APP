import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';


@Injectable()
export class RoleguardProvider implements CanActivate{

  constructor(private auth: AuthProvider, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    // console.log(route.data.roles[0]['Trainer']);
    if (currentUser) {
        // check if route is restricted by role
        if(currentUser.role === 'Trainer') {
          this.router.navigate(['/userhome/tab_clients']);
          return true;
        }
        else if(currentUser.role === 'Client') {
          this.router.navigate(['/userhome/client_progress']);
          return true;
        }
        

        // authorised so return true
        return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
