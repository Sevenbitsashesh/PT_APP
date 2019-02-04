import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../../Models/users.details'
import { Observable } from 'rxjs';
import { API_URL } from '../../Models/api_url';

@Injectable()
export class UserProvider {
  
  constructor(public http: HttpClient) {
    // http.get('/users')
  }
  getUser(guid): Observable<UserDetails> {
    return this.http.post<UserDetails>(API_URL+'/users',{'guid': guid},{'headers' : {'Authorization': 'Bearer '}});
  }
 
  
 
  
}
