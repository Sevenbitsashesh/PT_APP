import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';




@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  
  constructor() {
    // console.log('on home tab');

    
     this.checkVerification();
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
}
