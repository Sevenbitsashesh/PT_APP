import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable()
export class LoginProvider {
  message: string;
  constructor(public http: HttpClient, private fireAuth: AngularFireAuth, private sharedService: SharedProvider, private router: Router) {
      // sharedService.checkLogin();           
  }

  // Create user in firebase Authentication
createAcc(model) {
  this.sharedService.loaderCall();
  this.fireAuth.auth.createUserWithEmailAndPassword(model.email , model.pass).then(user => {
    // this.createUser(model.email , model.pass);
    this.createUser(model);
    // this.createUid();
    // this.getLogin();
  })

}
  // create user in Firestore
  createUser(model) {
    const user = {
      email: model.email,
      userid: model.userid,
      firstname: model.fname,
      lastname: model.lname,
      profile_pic: 'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt'
      + '=media&token=04d24821-a4ab-4a03-915c-dd97a6ca2a26'
    };
     this.sharedService.addInfo(user);
  }
  getSocialAuth() {
      
     return new Promise<any>((resolve, reject) => {
        let provider =new firebase.auth.FacebookAuthProvider();
        // provider.addScope('email');
        let a = this.fireAuth.auth.signInWithPopup(provider).then(res => {
          // console.log(this.fireAuth.auth.currentUser);
          // console.log('user',res);
          // this.http.get(`http:8100//localhost/access_token?="${res}"`)
        }).catch(error => {
          console.log('error is:', error);
        })
          
      })
  }
  checkLogin() {
    return this.fireAuth.authState;
  }
  userExist(userid) {
    // return this.sharedService.userscollection.ref.where('userid','==',userid);
  }
}
