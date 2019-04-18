import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class ClientroleguardProvider {

  constructor(private auth: AuthProvider, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.auth.currentUserValue;
    // console.log(route.data.roles[0]['Trainer']);
    if (currentUser) {
        // check if route is restricted by role
        if(currentUser.role !== 'Client') {
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/userhome/client_progress']);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
          
          
        }
        
        

        // authorised so return true
        return true;
    }

    
  }
}
