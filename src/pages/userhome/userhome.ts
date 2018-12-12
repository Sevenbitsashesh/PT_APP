import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
})
export class UserhomePage {

  constructor() {
    console.log('userhome page loaded');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserhomePage');
  }

}
