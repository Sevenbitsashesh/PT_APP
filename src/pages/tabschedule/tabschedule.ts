import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-tabschedule',
  templateUrl: 'tabschedule.html',
})
export class TabschedulePage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabschedulePage');
  }

}
