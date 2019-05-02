import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';


@Injectable()
export class WorkoutProvider {
  header = new HttpHeaders();
  constructor(public http: HttpClient) {
      
  }
  // Trainer Services
  getMyWorkouts(myid,user): Observable<any> {
    return this.http.post(API_URL+'workout/myworkouts',{userid: myid},{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+ user.token}});
  }
  addWorkout(body,auth): Observable<any> {
    this.header.append("Authorization","Bearer "+auth.token);
    return this.http.post(API_URL+ 'workout/addworkout',body,{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+ auth.token}});
  }



  // Client Services
  getMyWorkoutPlan(myid,user): Observable<any> {
    return this.http.post(API_URL+'workout/myworkoutplan',{userid: myid},{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+ user.token}});
  }
}
