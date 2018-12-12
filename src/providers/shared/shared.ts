import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {
  loggedUser: any;
  constructor(public http: HttpClient, private router: Router) {
    console.log('Hello SharedProvider Provider');
  }
  getLogged() {
    console.log('getlogged', localStorage.getItem('usermail'));
    return localStorage.getItem('usermail');
  }
  // Checking Login
  checkLogin() {
    if (localStorage.getItem('usermail') !== null ) {
      // setting login user
       this.loggedUser = this.getLogged();
        // this.loggedUser = this.loggedUser.toLowerCase();
       // this.router.navigateByUrl('/tabs/(home_tab:home_tab)');
       this.router.navigate(['/userhome']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
