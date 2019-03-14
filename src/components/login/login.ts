import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { PassportProvider } from '../../providers/passport/passport';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UserProvider } from '../../providers/user/user';
import { Router } from '@angular/router';
import { Modal } from 'ionic-angular';
export class SocialUser {
  first_name: string;
  last_name: string;
  email: string;
  gender: string
}


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

@Injectable()
export class LoginComponent {

  
  login;
  socialLogin:boolean = true;
  socialUser: SocialUser;

  constructor(private authService: AuthProvider, private userService: UserProvider, private router: Router) {    
    authService.checkLogin();
    this.login = "signin";
    
  }
  loginFacebook() {
    this.authService.loginFacebook().then((res: FacebookLoginResponse) => {
      console.log(res);
        let userId = res.authResponse.userID;  
        this.userService.getUserInfoById(userId).subscribe(social => {
          console.log(social);
          // If Facebook account Already create
          if(social.message !== "Not found") {
              this.authService.getFbData().then(u => {
                console.log(u);                                                
                this.authService.signInSocial(u).subscribe(() => {
                    this.router.navigate(['/userhome'])
                },(err) => {
                  console.log('Error Login',err)
                });
              })
          }
          // If Facebook account not created
          else if(social.message === "Not found") {
              console.log('Acccount is not exist');
              
              this.socialLogin = false;
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
