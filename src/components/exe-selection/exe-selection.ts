import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { DataProvider } from '../../providers/data/data';
import { ViewController, NavParams } from 'ionic-angular';

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
  exeList = [];
  constructor(private dataService: DataProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private viewController: ViewController, private params: NavParams) {
    
   
  }
  ngOnInit() {
    if(this.params.get('exercise')) {
      this.exercise = this.params.get('exercise');
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
}
