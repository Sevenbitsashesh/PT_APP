import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { Router } from '@angular/router';



@IonicPage()
@Component({
  selector: 'page-tabschedule',
  templateUrl: 'tabschedule.html',
})
export class TabschedulePage {

  constructor(private route: Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabschedulePage');
  }

}
