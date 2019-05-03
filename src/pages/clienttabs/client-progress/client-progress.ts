import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider, UserDetails, TokenPayload } from '../../../providers/auth/auth';
import { UserProvider } from '../../../providers/user/user';
import { DataProvider } from '../../../providers/data/data';
import { AdMobFree } from '@ionic-native/admob-free';
import { UserInfo } from '../../../Models/users_info';
import { Subscription } from 'rxjs';
import { ClientProvider } from '../../../providers/client/client';



@IonicPage()
@Component({
  selector: 'page-client-progress',
  templateUrl: 'client-progress.html',
})
export class ClientProgressPage {
  currentUser: UserDetails;
  userInfo: UserInfo;
  authDetails: TokenPayload;
    currentUserSubscription: Subscription;  
  constructor(private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider, private adMob: AdMobFree, private clientService: ClientProvider) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      
      this.currentUser = user;      
      // this.authDetails = this.authService.getUserDetails();
      
     this.dataService.getUserData(user);     
  }); 
  // this.getMyData();
}
  
}
