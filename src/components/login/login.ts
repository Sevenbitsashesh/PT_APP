import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { PassportProvider } from '../../providers/passport/passport';



@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

@Injectable()
export class LoginComponent {

  
  login;
  socialLogin:boolean = false;
  socialUser: SocialUser;

  constructor(private authService: AuthProvider) {    
    authService.checkLogin();
    this.login = "signin";
    
  }
  loginFacebook() {
    this.authService.loginFacebook().then(res => {
      console.log(res);
      this.socialLogin = true;
    });
  }
  



  
}
