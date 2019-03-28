import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL,LOCAL_API_URL } from '../../Models/api_url';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FabButton } from 'ionic-angular';
import { SocialUser } from '../../components/login/login';


// export class SocialUser {
//   token: string;
//   expires?: number;
//   session_key?: boolean;
//   userid?: string;
// }
export class UserDetails  {
  email: string;
  token: string;
  user_name?: string;
  fname?: string;
  lname?: string;  
};
export interface TokenResponse {
token: string;
};
export interface TokenPayload {
  id: string;
  email: string;
  exp: number;
  iat: number;
};
@Injectable()
export class AuthProvider {
  
  private token: string;
  currentUserSubject: BehaviorSubject<UserDetails>;
  public currentUser: Observable<UserDetails>;
  constructor(private router: Router, private http: HttpClient, private fb: Facebook) {
//new auth    
    if(localStorage.getItem('swaUser')) {
this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('swaUser')));
        this.currentUser = this.currentUserSubject
    }
    
  }
  public get currentUserValue(): UserDetails {
    return this.currentUserSubject.value;
  }
  private saveToken(user: UserDetails): void {
    localStorage.setItem('swaUser',JSON.stringify(user));
    
    this.currentUserSubject.next(user);
  }
  private getToken(): string {
    if (localStorage.getItem('swaUser')) {
      this.token = JSON.parse(localStorage.getItem('swaUser')).token;
    }
    return this.token;
  }

  signInEmail(cred) {
    return this.request('post','authenticate',cred);
  }
  signUp(cred) {
    // console.log(cred);
    return this.request("post","register",cred);
  }
  signInSocial(cred) {
    // console.log('mycred',cred)
    return this.request('post','socialauthenticate',cred);
  }
  signupSocial(cred: SocialUser) {
    console.log(cred);
    return this.request('post','registersocial',cred);
  }
  private request(method: 'post'|'get', type: 'authenticate'|'register'|'profile'|'socialauthenticate'| 'registersocial', user): Observable<any> {
    let base;
// console.log(user,type,method);
    if (method === 'post') {
      console.log('cred',user);
      base = this.http.post( API_URL+'users/'+type,user,{headers: {'Content-Type': 'application/json','Accept': 'application/json','Authorization': 'Basic Og=='}}).pipe(share());
    } else {
      base = this.http.get(`/users/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
    
    const request = base.pipe(
      map((data: UserDetails) => {
         console.log(data,user);
        if (data.email === user.email) {
          
          this.saveToken(data);
        }
        
        return data;
      })
    );

    return request;
  }
  public getUserDetails(): TokenPayload {
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
      // console.log('change1',user);
      // this.currentUserSubject.next(user);
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
  logout(): Promise<any> {
    // console.log(this.token);
    return new Promise(() => {
      this.token = '';
      window.localStorage.removeItem('swaUser');
      this.router.navigateByUrl('/login');
    })    
  }
  loginFacebook() : Promise<any> {
    
    let permissions = ["public_profile", "email","user_gender"];
      // this.fb.api('/me?fields=first_name,last_name,email,user_gender',permissions).then(user => {        
      //   console.log(user);
      // })   
    return this.fb.login(permissions);
  }
  getFbData() {
    let permissions = ["public_profile", "email","user_gender","user_birthday"];
    
    return this.fb.api('/me?fields=first_name,last_name,email,gender,picture.type(small),birthday',permissions);
  }

  // loginFacebook() : Promise<any> {
  //   let permissions = ["public_profile", "email"];
  //   return this.fb.login(permissions).then((res: FacebookLoginResponse) => {
  //     let userId = res.authResponse.userID;      
  //     this.fb.api('/me?fields=first_name,last_name,email',permissions).then(user => {        
  //     })      
  //   }).catch(err => {
  //     console.log(err);
  //   });  
  // }
}
