import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Injectable()
export class LoginProvider {
  message: string;
  constructor(public http: HttpClient, private fireAuth: AngularFireAuth, private sharedService: SharedProvider, private router: Router) {
      sharedService.checkLogin();     
       
  }
  getLogin(model) {
    
    this.sharedService.firebaseAuth.auth.signInWithEmailAndPassword(model.email,model.pass).then(auth => {
      // ().then(token => {
      //   console.log('token',token);
      // })
      localStorage.setItem('usermail', model.email);
      console.log(auth.user.email,'Logged In');
      this.router.navigate(['/userhome']);
    }).catch(error => {
      this.message = error;
    });
     

  }
  // Create user in firebase Authentication
createAcc(model) {
  this.sharedService.loaderCall();
  this.fireAuth.auth.createUserWithEmailAndPassword(model.email , model.pass).then(user => {
    // this.createUser(model.email , model.pass);
    this.createUser(model);
    // this.createUid();
    // this.getLogin();
  },
  err => { this.message = err;  throw err;  }
  );

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
}
