import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails, TokenPayload } from '../../providers/auth/auth'
import { Observable } from 'rxjs';
import { API_URL, LOCAL_API_URL } from '../../Models/api_url';

@Injectable()
export class UserProvider {
  
  constructor(public http: HttpClient) {
  
  }
  getUserData(auth: UserDetails): Observable<any> {
    return this.http.post(LOCAL_API_URL+'getUserInfoById',{'publicid': auth.email},{headers : {  'Accept' : 'application/json',
      'Content-Type' : 'application/json','Authorization': 'Bearer '+ auth.token}});
  }
  // updateUserData(Models: UserDetails) {
  //   return this.http.post(API_URL+'UpdateDeatail',Models,{headers: {'Accept' : 'application/json',
  //   'Content-Type' : 'application/json','Authorization': 'Bearer '+this.token}});
  // }
 
  
 
  
}
