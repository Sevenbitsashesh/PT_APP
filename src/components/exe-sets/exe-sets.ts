import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { DataProvider } from '../../providers/data/data';
import { ViewController, NavParams } from 'ionic-angular';

export class Sets {
  reps: number;      
}

@Component({
  selector: 'exe-sets',
  templateUrl: 'exe-sets.html'
})
export class ExeSetsComponent implements OnInit{
  exercise;
  sets = [];
  //original
  @Output() emitter: EventEmitter<any[]> = new EventEmitter();
  exeList = [];
  selected: boolean = false;
  constructor(private dataService: DataProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private viewController: ViewController, private params: NavParams) {
    this.viewController.onDidDismiss(data => {
      console.log(data);
    })
   
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
    if(this.sets) {
      this.viewController.dismiss(this.sets);
    } 
  }
}
