import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';

@Injectable()
export class AuthguardProvider implements CanActivate {

  constructor(public http: HttpClient, private auth: AuthProvider, private router: Router) {

  }
canActivate() {
  if (!this.auth.isLoggedIn()) {
    console.log('not logged in')
    this.router.navigateByUrl('/login');
    return false;
  }
  return true;
}
}
