import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';

@Injectable()
export class MealProvider {

  constructor(public http: HttpClient) {

  }
  getMyMeals(myid,user): Observable<any> {
    console.log(myid);
    return this.http.post(API_URL+'meal/mymeals',{userid: myid},{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+ user.token}});
  }
  addMeal(body): Observable<any> {
    return this.http.post(API_URL+ 'meal/addmeal',body);
  }
}
