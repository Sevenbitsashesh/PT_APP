import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { DataProvider } from '../../providers/data/data';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';
import { NativeProvider } from '../../providers/native/native';

export class Sets {
  reps: number;      
}

@Component({
  selector: 'exe-selection',
  templateUrl: 'exe-selection.html'
})
export class ExeSelectionComponent implements OnInit{
  exercise;
  sets = [];
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();
  @ViewChild(ExeSetsComponent) exeSelectionCom: ExeSetsComponent;
  exeList = [];
  exerciseSelected;
  constructor(private dataService: DataProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private viewController: ViewController, private params: NavParams, private modal: ModalController, private nativeService: NativeProvider) {
    this.viewController.onDidDismiss(data => {
      
    })
   
  }
  ngOnInit() {
    if(this.params.get('exerciseMuscle')) {
      const muscle = this.params.get('exerciseMuscle');
      console.log(muscle);
      this.exeService.getExercise(this.auth.currentUserValue,{exe_muscle: muscle.muscle_type}).subscribe(dataExercise => {
      this.exercise = dataExercise;
    })
      
    }
  }
  receiveExercises(data) {
    console.log(data);
  }
  closeView() {
    this.viewController.dismiss().then(disData => {
      console.log('Dismissed Data');
    })
  }
  newSet() {
    const set = new Sets();
    set.reps = 1;
    this.sets.push(set);
  }
  removeSet() {
    this.sets.pop();
  }
  incSet(item) {
    item.reps++;
  }
  decSet(item) {
    item.reps--;
  }
  setExercise() {
    console.log(this.sets);
   this.viewController.dismiss(this.sets);
  }
  goBackExercise() {
    this.viewController.dismiss();
  }
  goNextSets() {
    if(this.exerciseSelected) {
        const modal = this.modal.create(ExeSetsComponent,{exercise: this.exerciseSelected})
        modal.present().then(() => {
          
            
             modal.onDidDismiss(setsdata => {
               console.log(setsdata)
               if(setsdata.length > 0) {
            this.viewController.dismiss({sets: setsdata, exercise: this.exerciseSelected}).then(dismiss => {
              console.log('dismissed exercise')
            });              
               }
             })          
        });
    }
    else {
      this.nativeService.generateToast("Please Choose Exercise!","","bottom");
    }    
  }

}
