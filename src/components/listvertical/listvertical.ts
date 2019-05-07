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
  gotoDetails(item) {
    console.log(item);
    this.router.navigate(['/tab_workouts/workoutdetails'],{queryParams: {workid: item.id}});
  }
}
