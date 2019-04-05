import { Component } from '@angular/core';
import { delay } from 'rxjs/operator/delay';
import { Observable } from 'rxjs';

@Component({
  selector: 'newworkout',
  templateUrl: 'newworkout.html'
})
export class NewworkoutComponent {

  
  days = ['MON','TUE','WED','THUR','FRI','SAT','SUN'];
  exerciseSelect: boolean;
  item1 = [];
  
    
    
  constructor() {
    
  }
  newWorkoutBack() {
    window.history.back();
  }
  tagClick1(event) {
    var items = Array.from(document.querySelectorAll('.color-tag')).forEach(items => {
      items.classList.remove('shadow-tag-color1');
    })
    // for(var i; i <items.length;i++) {
    //   console.log(i);
    //   items.item(i).classList.remove('shadow-tag-color1');      
    // }
    document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
    // console.log(items);
    
    
    // document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
  }
  clickDay(dayControl) {
    var idDay = dayControl.target.id;
    // this.daysExercises.forEach(item => {
      
    //   if(this.daysExercises.find(idDay.split('_')[1])) {
        
    //     this.exerciseSelect = true;
    //   }
    // })
    if(idDay.split('_')[1] === "MON") {
      this.item1 = ['SQUAT','LEG Extention'];
          this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "TUE") {
      this.item1 = ['Dumbbell Lunges','Burpee', 'Barbel Lunge'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "WED") {
      this.item1 = ['Abs Scrunch','Trap Bar Deadlift', 'Barbel Push Up'];
      this.exerciseSelect = true;
    }
    
    Array.from(document.querySelectorAll('.single-day')).forEach(items => {
      items.classList.remove('single-day-selected');
    })
    document.getElementById(dayControl.target.id).classList.add('single-day-selected');
    
  }
  selectExe(control) {
    this.item1.push(control.target.id);
    console.log(this.item1);
  }
}
