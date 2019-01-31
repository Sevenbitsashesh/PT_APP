import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { AuthProvider } from '../../providers/auth/auth';




@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  
  constructor(private authService: AuthProvider) {
    authService.checkLogin('tab_home');
    //  this.checkVerification();
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
  this.authService.changeLogout(true);
}
}
