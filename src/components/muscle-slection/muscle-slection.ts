import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NativeProvider } from '../../providers/native/native';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ModalController, ViewController } from 'ionic-angular';
import { ExeSelectionComponent } from '../../components/exe-selection/exe-selection';

@Component({
  selector: 'muscle-slection',
  templateUrl: 'muscle-slection.html'
})
export class MuscleSlectionComponent {
  
  listExer = [];
  muscleSelected;  
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();
  constructor(private nativeService: NativeProvider, private workService: WorkoutProvider, private dataService: DataProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private modal: ModalController, private viewController: ViewController) {
    this.exeService.getMuscles(dataService.u.id,auth.currentUserValue).subscribe(exeMuscles => {
      console.log(exeMuscles)
      this.listExer = exeMuscles;
     })
     
  }
  goBackMuscle() {
  this.viewController.dismiss();    
  }
  goNextExercise() {
    if(this.muscleSelected) {
      console.log(this.muscleSelected)
      this.modal.create(ExeSelectionComponent,{exerciseMuscle: this.muscleSelected}).present().then(muscleData => {
        
        this.viewController.dismiss().then(exeData => {
            console.log('Exercise Added')
        })
      });
    }
    else {
      this.nativeService.generateToast("Please Select Muscle Type","","bottom");
    }
  }
}
