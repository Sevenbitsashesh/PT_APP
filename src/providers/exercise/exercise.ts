import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';
export class ExerciseModel {
  exe_name: string;
  userid: string;
  exe_type: string;
  exe_muscle: string;
  exe_pic: string;
  exe_desc: string;
}

@Injectable()
export class ExerciseProvider {

  constructor(public http: HttpClient) {

  }
  getExercises() : Observable<any> {
     return this.http.get(API_URL+'exercise');
  }
  addExercise(exeModel: ExerciseModel): Observable<any> {
    return this.http.post(API_URL + 'exercise/addexercise',exeModel);
  }
  getMyExercises(cred) : Observable<any> {
    return this.http.post(API_URL+ 'exercise/myexercises',{userid: cred});
  }
}
