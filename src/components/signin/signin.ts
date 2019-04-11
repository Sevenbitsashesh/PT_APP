import { Component, OnInit, Input } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { LoginProvider } from '../../providers/login/login';
import { AuthProvider, TokenPayload } from '../../providers/auth/auth';
import { Router } from '@angular/router';
import { UserProvider } from '../../providers/user/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import {  existingUsernameValidator } from '../../directives/existing-userid-validator/existing-userid-validator';
import { NativeProvider } from '../../providers/native/native';



@Component({
  selector: 'signin',
  templateUrl: 'signin.html',
  animations: [
  ]
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
    ],
    'cpassword': [
      { type: 'required', message: 'Confirm Password is required'},
      { type: 'match', message: 'Password should match!' }
    ],
    'fname': [
      { type: 'required', message: 'Please Enter Firstname' },
      {type: 'pattern', message: 'Should only include letters'},
    ],
    'lname': [
      { type: 'required', message: 'Please Enter Lastname' },
      {type: 'pattern', message: 'Should only include letters'},
    ],
    'username': [
      {type: 'required', message: 'Username is required'},
      { type: 'pattern', message: 'Enter Valid Userid' },
      { match: 'matched', message: 'Userid Already taken!'}
    ]
  };
  saved: boolean = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),
        // Validators.pattern('/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|\d+$/'),
        Validators.required
      ])),
      pass: new FormControl('', Validators.compose([
          Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}'),
        Validators.required
      ])),
      cpass: new FormControl('', Validators.compose([
        Validators.required
      ])),
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
          Validators.minLength(5),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.required,
          
      ]
      ),existingUsernameValidator(this.userService)
      )
    });
  }
  show: boolean = false;
  arrow: string = "../../assets/icon/arrowdown.new.png";
  eyeIcon = "eye";
  showPassword: boolean = false;
  constructor(private authService: AuthProvider, private router: Router, private userService: UserProvider, private nativeService: NativeProvider) {

    // authService.checkLogin();
  }
  showSign() {
    
    const signupItems = document.getElementsByClassName('mysignup');
    for(var i=0;i<signupItems.length; i++) {
      signupItems[i].setAttribute('hidden',`${!this.show}`);
    }
    
    if(this.show) {
      this.arrow = "../../assets/icon/arrowdown.new.png";
    }
    else {
      this.arrow = "../../assets/icon/arrowup.new.png";
    }
    this.show = !this.show;
    
    
    
  }
  
  getLogin() {        

    if(navigator.onLine) {
      document.getElementById('btn-login').classList.add('btn-login-click');
      document.getElementById('btn-login').innerHTML = 'Please Wait';
     const credentials = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('pass').value
        
      }
      this.authService.signInEmail(credentials).subscribe(() => {
        this.msg = '';
        this.nativeService.generateNoti('Welcome '+credentials.email);
        this.router.navigate(['/userhome']);

      }, (err) => {
        if(err) {
          console.log(err);
        this.msg = "Email Or Password is incorrect!";
        document.getElementById('btn-login').classList.remove('btn-login-click');
        document.getElementById('btn-login').innerHTML = 'Login';
        
        }
      })
    }
   else {
     this.nativeService.generateToast('Please Connect to Internet','');
   }
    }
    getSignup() {
      if(navigator.onLine) { 
        document.getElementById('btn-signup').classList.add('btn-login-click');
      document.getElementById('btn-signup').innerHTML = '>';
        const model = {
          'fname': this.loginForm.get('fname').value,
          'lname': this.loginForm.get('lname').value,
          'email': this.loginForm.get('email').value,
          'password': this.loginForm.get('pass').value,
          'cpassword': this.loginForm.get('cpass').value,
          'user_name': this.loginForm.get('username').value,
          'socialUser': false        
        };
        this.authService.signUp(model).subscribe(user => {

          if(!user.error) {                      
            
            this.nativeService.generateToast("Account Created","toast-success");
          }
          else {
            this.nativeService.generateToast("Account Already Created","toast-error");
          }
          // this.saved = true;
          document.getElementById('btn-signup').classList.remove('btn-login-click');
        document.getElementById('btn-signup').innerHTML = 'Signup';
        });
      }      
    }
    showHide() {
      if(this.showPassword) {
        this.showPassword = false;
        this.eyeIcon = 'eye-off';
      }
      else {
        this.showPassword = true;
        this.eyeIcon = 'eye';
      }
    }

  // heartClick() {
  //   if(document.getElementById('heart-like').classList.contains('heart-black-animate')) {
  //     document.getElementById('heart-like').classList.remove('heart-black-animate');
  //   }
  //   else {
  //     document.getElementById('heart-like').classList.add('heart-black-animate');
  //   }
  // }

 
 
}
