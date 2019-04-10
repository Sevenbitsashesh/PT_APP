import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { WorkoutProvider } from '../../providers/workout/workout';

export class WorkoutDetails  {
  work_name: string;
  work_colortag: string;
  work_days: Days[];
  work_pic: string;
  userid: string;
  work_level: string;
}
class Days {
  mon: ExeSet[];
  tue: ExeSet[];
  wed: ExeSet[];
  thu: ExeSet[];
  fri: ExeSet[];
  sat: ExeSet[];
  sun: ExeSet[];
}
class ExeSet {
  type: string;
  set: string;
  repetitions: string;
  weight: string;
  muscle: string;
}
@Component({
  selector: 'listworkouts',
  templateUrl: 'listworkouts.html'
})
export class ListworkoutsComponent {

  workouts: WorkoutDetails[];
  constructor(private dataService: DataProvider, private workService: WorkoutProvider) {
    console.log(dataService.u);
    workService.getMyWorkouts(dataService.u).subscribe((data: WorkoutDetails[]) => {
      this.workouts = data;
    })
  }
  
}
