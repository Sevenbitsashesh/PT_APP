import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DataProvider } from '../../providers/data/data';
import { Credentials } from '../../Models/credentials';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthProvider {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  logOutSub = new BehaviorSubject('');
  logOutObs = this.logOutSub.asObservable();
  checkLoginSub = new BehaviorSubject(false);
  checkLoginObs = this.checkLoginSub.asObservable();
  constructor(private fauth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.user = fauth.authState;
    this.checkLogin('current');   
  }
  signInEmail(email,pass) {
    // return this.fauth.auth.signInWithEmailAndPassword(email,pass);
    let msg;
    console.log(email,pass);
    this.http.post('http://api.veridoceducation.com/api/login',{email: 'parmar.ashesh@tristonsoft.com', password: '123456'},{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).subscribe(suc => {
    console.log(suc);
    });
   
   
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
        localStorage.removeItem('username');
        localStorage.removeItem('usermail');
        window.location.reload();
        // this.router.navigate(['/login']);
      });
    }
  }
  checkLogin(from) {
    console.log('checking',from);
    this.user.subscribe(
      (user) => {
        if (user) {
          
          this.userDetails = user;          
          // console.log('Logged In User:',this.userDetails);
          this.router.navigate(['/userhome']);

          // console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
          this.router.navigate(['/login']);
        }
      }
    );
  }
  getDetails() {
    this.http.post('http://api.veridoceducation.com/api/details',{email: 'parmar.ashesh@tristonsoft.com', password: '123456'},{headers: {'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json',  'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0OGMxMDYwNTNmMjgwNjZiMTgxOTJkNjE0MzJiYjQxNjA5Mjk0ZjVmNmI1ZjMxY2Q4ZmVkZjcyZWJhNDJiNjcwZTA3Y2RkZWE1Mjk1NmVkIn0.eyJhdWQiOiIxIiwianRpIjoiNjQ4YzEwNjA1M2YyODA2NmIxODE5MmQ2MTQzMmJiNDE2MDkyOTRmNWY2YjVmMzFjZDhmZWRmNzJlYmE0MmI2NzBlMDdjZGRlYTUyOTU2ZWQiLCJpYXQiOjE1NDc3MTg1MjcsIm5iZiI6MTU0NzcxODUyNywiZXhwIjoxNTc5MjU0NTI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyQN4YnHvL5LF99axlj4lMu042U_rdeJJFr6bWLtx9AMwTBm9KfS1LdIdDuPzeP01QE2wshhJiBqr4NDP9hPPCA-yXjj_GA7-NczaeaCwgvG9lpWajaipWV0fH0J3F3pXYGHs_bvO7aZnWAYi-1nncUXn2q1Svelvgr-tJkk_S9IAn8bcU_aEkHhoHH8ER_c49kDPRxvne_sf_kVQlqD-mqBLRnxP-5x2uKQB1Fj7Ki04fhF8H8YYt7_ZnpbQZUSRPcaNH5PYFem9CFDKZNjocCaa1NYm-bDyb5GteS-CY8JdDS1lHEDB06tFTvoZGndhy2KtfL8Ej385yB_Jel3BQFrdjwIRpPJaAsbpIunxRzPeKp34V85w3Dw0yqdpRs2tNqFUJpTKgRwF4vUkl3VE0BaYYA3j9aPcLAmRDGlY8CQhhuOSYOALTfdFbIaA1yV0MHRLCfKpKZJgqaGeSbobWoN_93NVoKU3IgdpNyLLsOZV3XE-GOdPfLHuiQRCSssXTvwgJ5HZESwBN4WClunFzXzJuEeVyT2bfo3Ek_b0PhiD8HlFu2STGPEQKgu9W4kZSBWZMhiaWZ5Jt477ClX9-KLaun36WLd0BZujRHLZ4sysgbnsHELi0iz4-oTJLu8NFhnRiF4-d3el3jaBb5Av_dGGLjc34m4UoKrO-a-cW4' }}).subscribe(suc => {
      console.log(suc);
      });    
  }
}
