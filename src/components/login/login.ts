import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';



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

  constructor(public router: Router,private formBuilder: FormBuilder, private loadingController: LoadingController) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'),
        Validators.required
      ])),
      pass: new FormControl('', Validators.compose([
          Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}'),
        Validators.required
      ])),
    });
  }
  
  async presentLoading() {
    const loader = await this.loadingController.create({
      content: 'Please wait..',
      duration: 5000,
    });
    return await loader.present();
  }
getLogin() {
  this.presentLoading();
}
}
