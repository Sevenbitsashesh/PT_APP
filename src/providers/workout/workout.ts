import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';


@Injectable()
export class WorkoutProvider {

  constructor(public http: HttpClient) {
      
  }
  getMyWorkouts(myid): Observable<any> {
    return this.http.post(API_URL+'workout/myworkouts',{userid: myid});
  }
  addWorkout(body): Observable<any> {
    return this.http.post(API_URL+ 'workout/addworkout',body);
  }
}
