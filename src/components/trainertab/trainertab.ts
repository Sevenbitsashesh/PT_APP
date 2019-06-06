import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trainer-tab',
  templateUrl: 'trainertab.html'
})
export class TrainerTab {

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    // router.on
    
  }
  goto(event) {
    
    const routeTo = event.target.id;
    console.log(routeTo);
    if(routeTo === "exercise") {
      
      this.router.navigate(['userhome/tab_exercises']);
    }
    else if(routeTo === "workout") {
      document.getElementById('workout').classList.add('active');
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
    else if(routeTo === "client") {
      
      document.getElementById('client').classList.add('active');
      this.router.navigate(['userhome/tab_clients']);
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
