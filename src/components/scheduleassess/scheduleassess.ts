import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Nav } from 'ionic-angular';


@Component({
  selector: 'scheduleassess',
  templateUrl: 'scheduleassess.html'
})
export class ScheduleassessComponent {



  user;
  constructor(private viewController: ViewController, private nav: NavParams) {
    this.user = this.nav.get('userid');
    this.viewController.onDidDismiss(dismissData => {
      console.log('dissmissed')
    });
  }
  dismiss() {    
    this.viewController.dismiss().then(dissmissed => {
      console.log('dissmissed');
    })
  }
}
