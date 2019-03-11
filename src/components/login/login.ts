import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { PassportProvider } from '../../providers/passport/passport';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UserProvider } from '../../providers/user/user';
import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

@Injectable()
export class LoginComponent {

  
  login;
  socialLogin:boolean = false;
  // socialUser: SocialUser;

  constructor(private authService: AuthProvider, private userService: UserProvider) {    
    authService.checkLogin();
    this.login = "signin";
    
  }
  loginFacebook() {
    this.authService.loginFacebook().then((res: FacebookLoginResponse) => {
      console.log(res);
        let userId = res.authResponse.userID;  
        this.userService.getUserInfoById(userId).subscribe(userData => {
          console.log(userData);
          if(userData === null) {
              this.authService.getFbData().then(u => {
                console.log(u);
                this.socialLogin = true;
              })
          }
        })
      }).catch(err => {
        console.log(err);
      }); 
    // .then(res => {
    //   console.log(res);
    //   if(res !== undefined) {
    //     this.socialLogin = true;
    //   }
      
    // });
  }
  



  
}
