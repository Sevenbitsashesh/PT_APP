import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { SelectclientComponent } from '../../components/selectclient/selectclient';

@Component({
  selector: 'listvertical',
  templateUrl: 'listvertical.html'
})
export class ListverticalComponent {
@Input() workouts;
@Output() openM = new EventEmitter();
menuOpen: boolean = false;

  constructor(private router: Router, private modalCtrl: ModalController) {
  
  }
  gotoDetails(item) {
    console.log(item);
    const selectModal = this.modalCtrl.create(SelectclientComponent,{workoutid: item.id, workoutname: item.work_name});
    selectModal.present();
    
    // .then(dataClient => {
    //   console.log(dataClient);
    // })
    // this.router.navigate(['/tab_workouts/workoutdetails'],{queryParams: {workid: item.id}});
  }
  openMenu(item) {
    if(item.menuOpen == true) {
      item.menuOpen = false;
      this.openM.emit(item);
    }
    else {
      item.menuOpen = true;
      this.openM.emit(item);
    }
    
  }
  pressed() {
    console.log('pressed');
  }
  active() {
    console.log('active');
  }
  released(item) {
    if(item.menuOpen == true) {
      item.menuOpen = false;
    }
    else {
      item.menuOpen = true;
    }
    console.log('released');
  }
}
