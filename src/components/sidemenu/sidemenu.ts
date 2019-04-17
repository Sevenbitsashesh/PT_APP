import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {
  @Input() currentUser;
  constructor(private router: Router) {
    
  }
  navClients() {
    this.router.navigate(['userhome/tab_clients']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navExercises() {
    this.router.navigate(['userhome/tab_exercises']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navWorkouts() {
    this.router.navigate(['userhome/tab_workouts']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navMealplans() {
    this.router.navigate(['userhome/tab_mealplans']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navSchedules() {
    this.router.navigate(['userhome/tab_schedule']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navProfile() {
    this.router.navigate(['userhome/tab_profile']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  
  
}
