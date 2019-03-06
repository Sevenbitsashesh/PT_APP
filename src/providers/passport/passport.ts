import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
@Injectable()
export class PassportProvider {

  constructor(public http: HttpClient, private fb: Facebook) {
    
  }
  loginFacebook() {
    this.fb.login(['public_profile']).then((res: FacebookLoginResponse) => {
      console.log(res.status);
    }).catch(err => {
      console.log(err);
    });  
  }
  
  }

