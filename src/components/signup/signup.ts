import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SharedProvider } from '../../providers/shared/shared';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the SignupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})

export class SignupComponent {
  @Input('signed') signed : string;
  email;
  pass;
  fname;
  lname;
  message;
  signupForm: FormGroup;
  validation_messages = {
    'email': [
      {type: 'required', message: 'Email is required'},
      { type: 'pattern', message: 'Not valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required'},
      { type: 'pattern', message: 'Minimum 8 and should include at least special charater'}
    ],
    'fname': [
      { type: 'required', message: 'Please Enter Firstname' }
    ],
    'lname': [
      { type: 'required', message: 'Please Enter Lastname' }
    ]
  };
  constructor(private formBuilder: FormBuilder, public router: Router, private loadingController: LoadingController, private fireAuth: AngularFireAuth, private sharedService: SharedProvider, private loginProvider: LoginProvider) {
    console.log(this.signed);
    this.signupForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),
        Validators.required
      ])),
      pass: new FormControl('', Validators.compose([
          Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}'),
        Validators.required
      ])),
      fname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    lname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    });    
  }
// Create user in firebase Authentication
createAcc() {
  const model = {
    'email': this.signupForm.get('email').value,
    'pass': this.signupForm.get('pass').value,
    'userid': this.signupForm.get('email').value,
    'fname': this.signupForm.get('fname').value,
    'lname': this.signupForm.get('lname').value
  };
  this.loginProvider.createAcc(model);

}
}
