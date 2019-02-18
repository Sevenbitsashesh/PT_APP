import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL,LOCAL_API_URL } from '../../Models/api_url';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { toBase64String } from '@angular/compiler/src/output/source_map';

export class UserDetails  {
  id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
  
};
export interface TokenResponse {
token: string;
};
export interface TokenPayload {
  email: string;
  password: string;
  user_name?: string;
  fname?: string;
  lname?: string;
};
@Injectable()
export class AuthProvider {
  private token: string;
  currentUserSubject: BehaviorSubject<UserDetails>;
  public currentUser: Observable<UserDetails>;
  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('swaUser')));
        this.currentUser = this.currentUserSubject.asObservable(); 
  }
  public get currentUserValue(): UserDetails {
    return this.currentUserSubject.value;
}
  private saveToken(user: UserDetails): void {
    console.log(user);
    localStorage.setItem('swaUser',JSON.stringify(user));
    this.currentUserSubject.next(user);
    
  }
  private getToken(): string {
    if (localStorage.getItem('swaUser')) {
      this.token = JSON.parse(localStorage.getItem('swaUser')).token;
      
    }
    return this.token;
  }

  signInEmail(cred: TokenPayload) {
    
    
  //  return this.http.post( LOCAL_API_URL+'users/authenticate',{email: cred.email, password: cred.password},{headers: {'Content-Type': 'application/json','Accept': 'application/json'}});
    return this.request('post','authenticate',cred);
  }
  signUp(cred: TokenPayload) {
    return this.request("post","register",cred);
    // this.http.post('http://api.veridoceducation.com/api/register',model,{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).subscribe(suc => {
    //   localStorage.setItem('swaToken',suc['success']['token']);      
    // });      
  }
  private request(method: 'post'|'get', type: 'authenticate'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;
// console.log(user,type,method);
    if (method === 'post') {
      
      
      base = this.http.post( LOCAL_API_URL+'users/'+type,user,{headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'Basic Og=='}});
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
    
    const request = base.pipe(
      map((data: UserDetails) => {
        // console.log(data);
        if (data) {
          
          this.saveToken(data);
        }
        return data;
      })
    );

    return request;
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];      
      payload = window.atob(payload);
      
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
  public isLoggedIn(): boolean {  
    const user = this.getUserDetails();
    this.currentUserSubject.next(user);
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  checkLogin() {
  
    if(this.getToken()) {
      this.router.navigate(['/userhome']);
    }
    else
    this.router.navigate(['/login']);
  }
  logout() {
    // console.log(this.token);
    this.token = '';
    window.localStorage.removeItem('swaUser');
    this.router.navigateByUrl('/login');
  }
  getDetails(token,guid) {
    // console.log(token,guid);
    this.http.post('http://api.veridoceducation.com/api/GetUserDetail',{'PublicGuid': guid},{headers: {'Content-Type': ' application/json','Accept': 'application/json',  'Authorization' : `Bearer `+token }}).subscribe(suc => {
      this.router.navigate(['/userhome']);
      });    
  }
}
