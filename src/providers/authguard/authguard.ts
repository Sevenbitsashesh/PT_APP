import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';
import { Roles } from '../../Models/roles';

@Injectable()
export class AuthguardProvider {

  constructor(public http: HttpClient, private auth: AuthProvider, private router: Router) {

  }
    canActivate() {
      // console.log('checking authguard',localStorage.getItem('swaUser'));
      if (!this.auth.isLoggedIn()) {
        console.log('not logged in');
        this.router.navigateByUrl('/login');
        return false;
      }
      
      return true;
    }
    
}
