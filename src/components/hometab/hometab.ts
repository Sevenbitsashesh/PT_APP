import { Component, NgZone, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../../Models/users_info';


@Component({
  selector: 'hometab',
  templateUrl: 'hometab.html'
})
export class HometabComponent {
  
  constructor(private router: Router) {
    // console.log('Hello HometabComponent Component');
    
  }
  goto(event) {
    
    const routeTo = event.target.id;
// console.log(routeTo);
    if(routeTo === "exercise") {
      this.router.navigate(['userhome/tab_exercises']);
    }
    else if(routeTo === "workout") {
      this.router.navigate(['userhome/tab_workouts']);
    }
    else if(routeTo === "mealplans") {
      this.router.navigate(['userhome/tab_mealplans']);
    }
    else if(routeTo === "schedule") {
      this.router.navigate(['userhome/tab_schedule']);
    }
    else if(routeTo === "profile") {
      this.router.navigate(['userhome/tab_profile']);
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
