import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';

import { AuthProvider } from '../../providers/auth/auth';




@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html'
})
export class UserhomePage {
  
  constructor(private authService: AuthProvider) {    
  
    // sharedService.getCred();  
    // sharedService.checkLogin();       
    authService.checkLogin();
  }
  

  

  
}
