import { Component, OnInit } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Nav } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'scheduleassess',
  templateUrl: 'scheduleassess.html'
})
export class ScheduleassessComponent implements OnInit {



  user;
  clientData;
  constructor(private viewController: ViewController, private nav: NavParams, private clientService: ClientProvider, private authService: AuthProvider, private dataService: DataProvider) {
    
  }
  ngOnInit() {
    this.user = this.nav.get('userid');
    this.dataService.userInfoObs.subscribe(da => {
      this.clientService.getClient(da[0],this.authService.currentUserValue,this.user).subscribe(dataClient => {
        if(dataClient) {
          console.log(dataClient)
          new Promise((resolve, reject) => {
            
            resolve(dataClient[0]);
          }).then(c => {
            this.clientData = c;
          })
          
        }
      else {
        this.clientData = [];
      }
      })
      
    })
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
