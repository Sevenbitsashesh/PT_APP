import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';
export class ExerciseModel  {
  exe_name: String;
      exe_pic: String
      exe_muscle: String
      exe_type: String
      exe_desc: String
      userid: String
}
@Injectable()
export class ExerciseProvider {
  header= new HttpHeaders();
  constructor(public http: HttpClient) {

  }
  getMyWorkouts(myid): Observable<any> {
    return this.http.post(API_URL+'exercise/myexercises',{userid: myid},{headers: this.header});
  }
  addWorkout(body): Observable<any> {
    return this.http.post(API_URL+ 'workout/addworkout',body);
  }
}
