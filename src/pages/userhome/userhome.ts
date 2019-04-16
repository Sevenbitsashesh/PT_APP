import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';

import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs';
import { DataProvider } from '../../providers/data/data';
import { UserProvider } from '../../providers/user/user';




@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html'
})
export class UserhomePage {
  currentUserSubscription: Subscription; 
  // 
  constructor(private authService: AuthProvider) {      
    // sharedService.getCred();  
    // sharedService.checkLogin();       
    authService.checkLogin();
    
  }
  

  

  
}
