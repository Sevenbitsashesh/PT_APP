import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DataProvider } from '../../providers/data/data';
import { Credentials } from '../../Models/credentials';

@Injectable()
export class AuthProvider {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  logOutSub = new BehaviorSubject('');
  logOutObs = this.logOutSub.asObservable();
  
  constructor(private fauth: AngularFireAuth, private router: Router) {
    this.user = fauth.authState;
    
    this.user.subscribe(
      (user) => {
        if (user) {
          
          this.userDetails = user;
   

          console.log('Logged In User:',this.userDetails);
          router.navigate(['/userhome']);

          // console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        } 
      }
    );
  }
  signInEmail(email,pass) {
    return this.fauth.auth.signInWithEmailAndPassword(email,pass);
  }
  signInGoogle() {
    return this.fauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  currentUser() {
    return firebase.auth().currentUser;
  }
  signOut() {
    return this.fauth.auth.signOut();
  }
  changeLogout(bool) {
    if(bool) {
      this.signOut().then(() => {
        console.log('sign out success');
        this.router.navigate(['/login'])
      });
    }
  }
  
}
