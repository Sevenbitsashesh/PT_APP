import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';

@Injectable()
export class MealProvider {

  constructor(public http: HttpClient) {

  }
  getMyMeals(myid): Observable<any> {
    return this.http.post(API_URL+'meal/mymeals',{userid: myid});
  }
  addMeal(body): Observable<any> {
    return this.http.post(API_URL+ 'meal/addmeal',body);
  }
}
