import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SharedProvider } from '../../providers/shared/shared';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginComponent {

  credentialsForm: FormGroup;
 // ref = firebase.database().ref('users/').push();
  email: string;
  pass: string;
  message: string;
  loginForm: FormGroup;
  model: any;
 
  constructor(public router: Router,private formBuilder: FormBuilder, private loadingController: LoadingController, private fireAuth: AngularFireAuth, private sharedService: SharedProvider) {
    sharedService.checkLogin();
    
    
  }
  


// Create user in firebase Authentication
createAcc() {
  const model = {
    'email': this.loginForm.get('email').value,
    'pass': this.loginForm.get('pass').value,
    'userid': this.loginForm.get('email').value
  };
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
      profile_pic: 'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt'
      + '=media&token=04d24821-a4ab-4a03-915c-dd97a6ca2a26'
    };
     this.sharedService.addInfo(user);
  }
}
