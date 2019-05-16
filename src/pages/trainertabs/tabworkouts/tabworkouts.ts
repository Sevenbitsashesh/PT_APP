import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, LoadingController } from 'ionic-angular';
import { NewworkoutComponent } from '../../../components/newworkout/newworkout';
import { Router } from '@angular/router';
import { UserDetails, AuthProvider } from '../../../providers/auth/auth';
import { UserInfo } from '../../../Models/users_info';
import { TokenPayload } from '../../../Models/users_info';
import { Subscription } from 'rxjs';
import { UserProvider } from '../../../providers/user/user';
import { DataProvider } from '../../../providers/data/data';
import { AdMobFree } from '@ionic-native/admob-free';




@IonicPage()
@Component({
  selector: 'page-tabworkouts',
  templateUrl: 'tabworkouts.html',
})
export class TabworkoutsPage  {

  currentUser: UserDetails;
  userInfo: UserInfo;
  authDetails: TokenPayload;
    currentUserSubscription: Subscription;  
  constructor(private router: Router, private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider, private adMob: AdMobFree) {
    
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
    
      this.currentUser = user;      
      // this.authDetails = this.authService.getUserDetails();
      
     this.dataService.getUserData(user);
  });
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
    // this.authService.logout().then(() => {
    //   console.log('Logged out Success');
    // });
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
  ionViewDidLoad() {
    // this.nav.push(NewworkoutComponent);

  }
  newWorkout() {
    this.router.navigate(['/tab_workouts/newworkout']);
  }  

}
