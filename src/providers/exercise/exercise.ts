import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';
export class ExerciseModel  {
      exe_name: String;
      exe_pic: String
      exe_muscle: String
      // exe_type: String
      exe_desc: String
      userid: String
      sec_exe_muscle: {}
}
@Injectable()
export class ExerciseProvider {
  header= new HttpHeaders();
  constructor(public http: HttpClient) {
    
  }
  getExercises(auth) : Observable<any> {
    return this.http.get(API_URL+'exercise',{headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer "+auth.token}});
 }
 addExercise(exeModel, auth ): Observable<any> {
   return this.http.post(API_URL + 'exercise/addexercise',exeModel,{headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer "+auth.token}});
 }
 getMyExercises(cred, auth) : Observable<any> {
   return this.http.post(API_URL+ 'exercise/myexercises',{userid: cred},{headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer "+auth.token}});
 }

  getMuscles(myid,auth): Observable<any> {
    return this.http.post(API_URL+'exercise/getmuscles',{userid: myid},{headers: {"Content-Type": "application/json","Accept": "application/json","Authorization": 'Bearer '+ auth.token}})
  }
  getExercise(auth,data) : Observable<any> {
    return this.http.post(API_URL+'exercise/getexercise',data,{headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer "+auth.token}});
 }
}
