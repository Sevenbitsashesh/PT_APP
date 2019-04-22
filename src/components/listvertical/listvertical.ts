import { Component, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'listvertical',
  templateUrl: 'listvertical.html'
})
export class ListverticalComponent {
@Input() workouts;
  constructor(private router: Router) {
  
  }
  gotoDetails() {
    this.router.navigate(['/tab_workouts/workoutdetails']);
  }
}
