import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/shared/shared';
import { UserInfo } from '../../../Models/users_info';
import { AuthProvider, UserDetails, TokenPayload } from '../../../providers/auth/auth';
import { Subscription, Observable,  } from 'rxjs';
import { UserProvider } from '../../../providers/user/user';
import { take } from 'rxjs/operators';
import { DataProvider } from '../../../providers/data/data';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@IonicPage()
@Component({
  selector: 'page-tabexercises',
  templateUrl: 'tabexercises.html',
})
export class TabexercisesPage {
  currentUser: UserDetails;
  userInfo: UserInfo;
  authDetails: TokenPayload;
    currentUserSubscription: Subscription;  
  constructor(private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider, private adMob: AdMobFree) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      
      this.currentUser = user;      
      // this.authDetails = this.authService.getUserDetails();
      
     this.dataService.getUserData(user);
  });
  }
  ngOnDestroy() {
    // this.currentUserSubscription.unsubscribe();
  }
  ngOnInit() {
    
 
}

checkVerification() {
   console.log('ver');  
   //uncommen for going to verify
  // this.userActivity.checkVerification();
}
goTop() {
  console.log('scrolling');
  window.scroll(0,0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
doRefresh(event) {
    
  setTimeout(() => {
    console.log('event called');
    window.location.reload;
           event.complete();
    
  },3000)
}
openNav() {
  document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
  let width = document.getElementById("mySidenav").style.width;
  if(width === '100%') {
    document.getElementById("mySidenav").style.width = '0%';
  }
  else {
    document.getElementById("mySidenav").style.width = '100%';
  }  
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
clickedContent() {
  document.getElementById("mySidenav").style.width = '0%';
  document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
}
logout() {
  this.authService.logout().then(() => {
    console.log('Logged out Success');
  });
}
clickNotification() {
  document.getElementById("mySidenav").style.width = '0%';
  if(document.getElementById('notificationDiv').classList.contains('click-not-slider-bar')) {
    document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
  }
  else {
    document.getElementById('notificationDiv').classList.add('click-not-slider-bar');
  }
  
}
showBanner() {

  // let bannerConfig: AdMobFreeBannerConfig = {
  //     isTesting: true, // Remove in production
  //     autoShow: true
  //     //id: Your Ad Unit ID goes here
  // };

  // this.adMob.banner.config(bannerConfig);

  // this.adMob.banner.prepare().then(() => {
  //     // success
  // }).catch(e => console.log(e));

}
launchInterstitial() {

  // let interstitialConfig: AdMobFreeInterstitialConfig = {
  //     isTesting: true, // Remove in production
  //     autoShow: true
  //     //id: Your Ad Unit ID goes here
  // }; 

  // this.adMob.interstitial.config(interstitialConfig);

  // this.adMob.interstitial.prepare().then(() => {
  //     // success
  // });

}


}
