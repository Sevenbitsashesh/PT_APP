import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { UserInfo } from '../../Models/users_info';
import { AuthProvider, UserDetails, TokenPayload } from '../../providers/auth/auth';
import { Subscription, from, Observable } from 'rxjs';
import { UserProvider } from '../../providers/user/user';
import { take } from 'rxjs/operators';
import { DataProvider } from '../../providers/data/data';





@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage implements OnInit {
  currentUser: UserDetails;
  userInfo: UserInfo;
  authDetails: TokenPayload;
    currentUserSubscription: Subscription;    
  constructor(private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider) {
    this.userInfo = this.dataService.u;
  // dataService.userInfoObs.subscribe(u => {
  //   this.userInfo = [];
    
  // })
  }
  ngOnDestroy() {
    // this.currentUserSubscription.unsubscribe();
  }
  ngOnInit() {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      
      // this.currentUser = user;
      // this.authDetails = this.authService.getUserDetails();
      console.log(user);
     this.dataService.getUserData(user);
  });
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
  let width = document.getElementById("mySidenav").style.width;
  if(width === '50%') {
    document.getElementById("mySidenav").style.width = '0%';
  }
  else {
    document.getElementById("mySidenav").style.width = '50%';
  }  
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  
}
clickedContent() {
  document.getElementById("mySidenav").style.width = '0%';
}
logout() {
  this.authService.logout().then(() => {
    console.log('Logged out Success');
  });
}
}
