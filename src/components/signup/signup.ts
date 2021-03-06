import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SharedProvider } from '../../providers/shared/shared';
import { LoginProvider } from '../../providers/login/login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthProvider } from '../../providers/auth/auth';


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
  formBuilder= new FormBuilder();
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
    ],
    'userid': [
      { type: 'pattern', message: 'Enter Valid Userid' },
      { match: 'matched', message: 'Userid Already in taken'}
    ]
  };
  constructor(private authService: AuthProvider) {    
    this.signupForm = this.formBuilder.group({
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
    userid: new FormControl('', Validators.compose([
      Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required,
        // this.userExist
    ]))
    });    
  }
// Create user in firebase Authentication
createAcc() {
  const model = {
    'fname': this.signupForm.get('fname').value,
    'lname': this.signupForm.get('lname').value,
    'email': this.signupForm.get('email').value,
    'password': this.signupForm.get('pass').value,
    // 'c_password': this.signupForm.get('pass').value,
    'user_name': this.signupForm.get('userid').value,
    // 'fname': this.signupForm.get('fname').value,
    // 'lname': this.signupForm.get('lname').value
  };
  this.authService.signUp(model).subscribe(user => {
    console.log(user);
  });
  // this.loginProvider.userExist(model.userid).get().then(u => {
  //   if(u.size > 0) {
  //     this.message = "Userid already taken."
  //   }
  //   else {
  //     this.loginProvider.createAcc(model);
  //   }
  // })
  
}

}
