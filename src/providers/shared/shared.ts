import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/Models/users.details';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { configusers } from '../../Models/users_firestore';
import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/a';
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {
  model: UserDetails;
  loggedUser: any;
  userscollection: AngularFirestoreCollection<UserDetails>;
  constructor(public http: HttpClient, private router: Router) {
    // console.log('Hello SharedProvider Provider');
  //  this.userscollection = this.database.collection<UserDetails>(configusers.collection_endpoint);
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
