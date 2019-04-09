import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';
import { NativeProvider } from '../../providers/native/native';


@Component({
  selector: 'newexercise',
  templateUrl: 'newexercise.html',
  animations: [
  ]
})
export class NewexerciseComponent {
  selectExeType: number;
  exeType: boolean = true;
  exeTypes = ['Select Type','Examples Bench Press 12reps - 40 lbs','30 strumps','60 sec Plank']
  constructor(public modalCtrl: ModalController, private nativeSrevice: NativeProvider) {
    // this.presentModal();
    this.selectExeType = 0;
  }
  presentModal() {
    const modal = this.modalCtrl.create(ExeSetsComponent);
    modal.present();
  }
  changeType(event) {
    const targetID = event.target.id;
    const element = document.getElementById(targetID);
    const allEle = Array.from(document.querySelectorAll('.single-exe-type')).forEach(item => {
          item.classList.remove('selected-exe-type')
    });
      if(targetID === "exeTypeWeight") {
        this.selectExeType = 1;
        element.classList.add('selected-exe-type');
      }
      else if(targetID === "exeTypeRepe") {
        this.selectExeType = 2;
        element.classList.add('selected-exe-type');
      }
      else if(targetID === "exeTypeDura") {
        this.selectExeType = 3
        element.classList.add('selected-exe-type');
      }
      else {
        this.selectExeType = 0;
        element.classList.add('selected-exe-type');
      }
  }
  addExercise() {
    this.nativeSrevice.generateToast('New Exercise Create','nothing');
  }
}
