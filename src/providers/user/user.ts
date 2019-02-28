import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails, TokenPayload } from '../../providers/auth/auth'
// import { Observable, BehaviorSubject } from 'rxjs';
import { API_URL, LOCAL_API_URL } from '../../Models/api_url';
import { UserInfo } from 'Models/users_info';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserProvider {
  Api_Url;
  currentUserSubject: BehaviorSubject<UserInfo>;
  constructor(public http: HttpClient) {
    
  }
  getUserData(user: UserDetails,auth: TokenPayload): Observable<any>{
    // console.log(auth.id, user.token);
    return this.http.post(API_URL+'users/'+'getuserinfobyid',{'userid': auth.id},{headers : {  'Accept' : 'application/json',
      'Content-Type' : 'application/json','Authorization': 'Bearer '+ user.token}});
    
  }
  // updateUserData(Models: UserDetails) {
  //   return this.http.post(API_URL+'UpdateDeatail',Models,{headers: {'Accept' : 'application/json',
  //   'Content-Type' : 'application/json','Authorization': 'Bearer '+this.token}});
  // }
  getUserByUId(userid): Observable<any>{
    // console.log('does exist?');
   return this.http.post(API_URL+'users/'+'getuserbyuid',{'userid': userid},{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json'}});
  }
  
 
  
}
