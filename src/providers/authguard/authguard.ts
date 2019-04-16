import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';
import { Roles } from '../../Models/roles';

@Injectable()
export class AuthguardProvider implements CanActivate {

  constructor(public http: HttpClient, private auth: AuthProvider, private router: Router) {

  }
    canActivate() {
      // console.log('checking authguard',localStorage.getItem('swaUser'));
      if (!this.auth.isLoggedIn()) {
        
        console.log('not logged in');
        this.router.navigateByUrl('/login');
        return false;
      }
      console.log(this.auth.currentUserValue.role);
      return true;
    }
    canActivate1(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.auth.currentUserValue;
      console.log(route.data.roles[0]['Trainer']);
      if (currentUser) {
          // check if route is restricted by role
          if(currentUser.role === 'Trainer') {
            this.router.navigate(['/trainerhome']);
            return true;
          }
          else if(currentUser.role === 'Client') {
            this.router.navigate(['/clienthome']);
            return true;
          }
          // if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
          //     // role not authorised so redirect to home page
          //     console.log('authrized trainer')
          //     this.router.navigate(['/trainerhome']);
          //     return false;
          // }
  
          // authorised so return true
          return false;
      }
  
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // }
}
