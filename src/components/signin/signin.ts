import { Component, OnInit } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { AuthProvider, TokenPayload } from '../../providers/auth/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  email;
  pass;
  msg;
  formBuilder =new FormBuilder;
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
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
  
  constructor(private authService: AuthProvider, private router: Router) {
    // authService.checkLogin();
    
  }
  
  getLogin() {        
    // const model = {
    //   'email': this.loginForm.get('email').value,
    //   'pass': this.loginForm.get('pass').value,
    // };
   const credentials = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('pass').value
    }
    this.authService.signInEmail(credentials).subscribe(() => {
      this.router.navigate(['/userhome']);
    }, (err) => {
      if(err) 
      this.msg = err['error']['message'];
    })
  
    
    
    }
 
}
