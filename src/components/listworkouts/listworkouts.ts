import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { WorkoutProvider } from '../../providers/workout/workout';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';

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
  constructor(private dataService: DataProvider, private workService: WorkoutProvider, private auth: AuthProvider, private loadingCntrl: LoadingController) {
  const loading = this.loadingCntrl.create({
    content: "Loading workouts..."
  })  
  loading.present().then(() => {
    workService.getMyWorkouts(dataService.u,this.auth.currentUserValue).subscribe((data) => {
      loading.dismiss();
      if(!data.message) {
        console.log(data);
        this.workouts = data;
        console.log('in')
      }
      else {
        
        this.workouts = undefined;
        console.log('out')
      }
    })
  })
    
  }
  
}
