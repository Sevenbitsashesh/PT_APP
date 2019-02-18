import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../../Models/users.details'
import { Observable } from 'rxjs';
import { API_URL, LOCAL_API_URL } from '../../Models/api_url';

@Injectable()
export class UserProvider {
  guid =localStorage.getItem('swaGuid');
  token =localStorage.getItem('swaToken');
  constructor(public http: HttpClient) {
    // http.get('/users')
  }
  getUserData(): Observable<any> {
    return this.http.post(LOCAL_API_URL+'GetUserDetail',{'PublicGuid': this.guid},{headers : {  'Accept' : 'application/json',
      'Content-Type' : 'application/json','Authorization': 'Bearer '+this.token}});
  }
  updateUserData(Models: UserDetails) {
    return this.http.post(API_URL+'UpdateDeatail',Models,{headers: {'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+this.token}});
  }
 
  
 
  
}
