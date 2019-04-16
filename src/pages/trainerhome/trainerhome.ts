import { Component } from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import { AuthProvider, UserDetails, TokenPayload } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { DataProvider } from '../../providers/data/data';
import { AdMobFree } from '@ionic-native/admob-free';
import { UserInfo } from '../../Models/users_info';
import { Subscription } from 'rxjs';



@IonicPage()
@Component({
  selector: 'page-trainerhome',
  templateUrl: 'trainerhome.html',
})
export class TrainerhomePage {
  
  constructor(private authService: AuthProvider) {
    authService.checkLogin();
}


}
