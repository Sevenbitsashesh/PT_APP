import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'trainertabs',
  templateUrl: 'trainertabs.html'
})
export class TrainertabsComponent {

  constructor(private router: Router) {

  }
  goto(event) {
    
    const routeTo = event.target.id;
console.log(routeTo);
    if(routeTo === "exercise") {
      this.router.navigate(['trainerhome/tab_exercises']);
    }
    else if(routeTo === "workout") {
      this.router.navigate(['trainerhome/tab_workouts']);
    }
    else if(routeTo === "mealplans") {
      this.router.navigate(['trainerhome/tab_mealplans']);
    }
    else if(routeTo === "schedule") {
      this.router.navigate(['trainerhome/tab_schedule']);
    }
    else if(routeTo === "profile") {
      this.router.navigate(['trainerhome/tab_profile']);
    }
    var btns = document.getElementsByClassName('active');
    // console.log(btns.length);
    for(let item=0; item < btns.length; item++) {
      btns.item(item).classList.remove('active');      
    }
    event.target.classList.add('active');
    // var btns = document.getElementsByClassName('spanTab');
    // document.getElementById('spanTab')    
  }
}
