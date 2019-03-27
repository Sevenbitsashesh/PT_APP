import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { PassportProvider } from '../../providers/passport/passport';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { UserProvider } from '../../providers/user/user';
import { Router } from '@angular/router';
import { Modal } from 'ionic-angular';
import { NativeProvider } from '../../providers/native/native';
export class SocialUser {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  profile_pic: string;
  birthday: Date;
  authRes: FacebookLoginResponse;
  username: string;
}


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

@Injectable()
export class LoginComponent {

  
  login;
  socialLogin:boolean = false;
  socialUser =new SocialUser();

  constructor(private authService: AuthProvider, private userService: UserProvider, private router: Router,private nativeService: NativeProvider) {    
    authService.checkLogin();
    this.login = "signin";
  }
  loginFacebook() {      
      this.authService.loginFacebook().then((res: FacebookLoginResponse) => { 
               
          let userId = res.authResponse.userID;  
          this.nativeService.generateLoad(5000);
          this.userService.getUserInfoById(userId).subscribe(social => {
            console.log(social);
            // If Facebook account Already create
            if(social && social.message !== "Not found") {
                this.authService.getFbData().then(u => {
                  // console.log(u);  
                  this.socialUser = u;
                  this.socialUser.profile_pic = u.picture.data.url;
                  
                  this.authService.signInSocial(u).subscribe(() => {
                      // this.router.navigate(['/userhome'])                      
                      window.location.reload();
                  },(err) => {
                    console.log('Error Login',err)
                  })
                }, reject => {
                  console.log('Error',reject);
                })
            }
            // If Facebook account not created
            else if(social === null) {
              this.authService.getFbData().then(u => { 
                console.log(u);
                this.socialUser = u;  
                this.socialUser.authRes = res;
                this.socialUser.profile_pic = u.picture.data.url;
                this.socialLogin = true;
              })
                console.log('Acccount is not exist');
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
  changeSocial(socialLogin) {
    this.socialLogin = socialLogin;
  }
}
