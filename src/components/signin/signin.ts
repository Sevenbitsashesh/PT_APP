import { Component } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';


@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninComponent {

  loginForm: FormGroup;
  email;
  pass;
  validation_messages = {
    'email': [
      {type: 'required', message: 'Email is required'},
      { type: 'pattern', message: 'Not valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required'},
      { type: 'pattern', message: 'Minimum 8 and should include at least special charater'}
    ]
  };
  constructor(private sharedService: SharedProvider, private formBuilder: FormBuilder, private loginService: LoginProvider) {
    sharedService.checkLogin();
    this.loginForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),
        Validators.required
      ])),
      pass: new FormControl('', Validators.compose([
          Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}'),
        Validators.required
      ]))
    });
  }
  getLogin() {
    // this.sharedService.loaderCall();
    
  const model = {
    'email': this.loginForm.get('email').value,
    'pass': this.loginForm.get('pass').value,
  };
  this.loginService.getLogin(model);
  
  }

}
