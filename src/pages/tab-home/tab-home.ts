import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  constructor() {
    console.log('on home tab');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

}
