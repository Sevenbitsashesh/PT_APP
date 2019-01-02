import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';



@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
})
export class UserhomePage {
  
  constructor(private sharedService: SharedProvider) {
    
    sharedService.checkLogin();
    console.log('userhome page loaded');
    console.log(location.href);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserhomePage');
  }

  logout() {
    localStorage.clear();
    this.sharedService.checkLogin();
  }
}
