import { Component, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { SelectclientComponent } from '../../components/selectclient/selectclient';

@Component({
  selector: 'listvertical',
  templateUrl: 'listvertical.html'
})
export class ListverticalComponent {
@Input() workouts;
  constructor(private router: Router, private modalCtrl: ModalController) {
  
  }
  gotoDetails(item) {
    console.log(item);
    const selectModal = this.modalCtrl.create(SelectclientComponent,{workoutid: item});
    selectModal.present()
    // .then(dataClient => {
    //   console.log(dataClient);
    // })
    // this.router.navigate(['/tab_workouts/workoutdetails'],{queryParams: {workid: item.id}});
  }
}
