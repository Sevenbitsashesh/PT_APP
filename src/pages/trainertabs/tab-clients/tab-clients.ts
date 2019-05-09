import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { UserProvider } from '../../../providers/user/user';
import { DataProvider } from '../../../providers/data/data';
import { AdMobFree } from '@ionic-native/admob-free';


@IonicPage()
@Component({
  selector: 'page-tab-clients',
  templateUrl: 'tab-clients.html',
})
export class TabClientsPage {
  @Input() currentUser;
  client;
  constructor(private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider, private adMob: AdMobFree) {
    this.client = 'listclients'
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


}
