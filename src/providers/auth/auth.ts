import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL,LOCAL_API_URL } from '../../Models/api_url';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class UserDetails  {
  _id: string;
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
};
@Injectable()
export class AuthProvider {
  private token: string;
  constructor(private router: Router, private http: HttpClient) {
    // this.checkLogin();    
  }
  private saveToken(token: string): void {
    localStorage.setItem('swa-token', token);
    this.token = token;
  }
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('swa-token');
    }
    return this.token;
  }

  signInEmail(cred: TokenPayload) {
    
    
  //  return this.http.post( LOCAL_API_URL+'users/authenticate',{email: cred.email, password: cred.password},{headers: {'Content-Type': 'application/json','Accept': 'application/json'}});
    return this.request('post','login',cred);
  }
  signUp(model) {
    this.http.post('http://api.veridoceducation.com/api/register',model,{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).subscribe(suc => {
      localStorage.setItem('swaToken',suc['success']['token']);
      // this.signInEmail(model.email,model.password);
    });      
  }
  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      // base = this.http.post(`/api/${type}`, user);
      console.log('calling');
      base = this.http.post( LOCAL_API_URL+'users/authenticate',{email: user.email, password: user.password},{headers: {'Content-Type': 'application/json','Accept': 'application/json'}});
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
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
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  checkLogin() {
  
    // if(this.isLoggedIn()) {
    //   this.router.navigate(['/userhome']);
    // }
    // else
    // this.router.navigate(['/login']);
    

    
  }
  getDetails(token,guid) {
    console.log(token,guid);
    this.http.post('http://api.veridoceducation.com/api/GetUserDetail',{'PublicGuid': guid},{headers: {'Content-Type': ' application/json','Accept': 'application/json',  'Authorization' : `Bearer `+token }}).subscribe(suc => {
      this.router.navigate(['/userhome']);
      });    
  }
}
