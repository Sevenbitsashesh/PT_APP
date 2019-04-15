import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { UserProvider } from '../../providers/user/user';
import { AuthProvider, UserDetails, TokenPayload } from '../../providers/auth/auth';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UserInfo } from '../../Models/users_info';
import { take } from 'rxjs/operators';


export class User {
  currentUser: UserDetails;
  userInfo: UserInfo;
};

@Injectable()
export class DataProvider {  
  user: UserInfo[];  
  userInfo = new BehaviorSubject<UserInfo[]>([]);
  userInfoObs = this.userInfo.asObservable();
  u: UserInfo;
  constructor(private userService: UserProvider, private authService: AuthProvider) {
    
    this.userInfoObs.subscribe(d => {      
      this.u = d[0];
    });
    
  }
  changeUserModel(user: UserInfo[]) {
    this.userInfo.next(user);
  }
  getUserData(currentUser: UserDetails) {
    
    this.userService.getUserData(currentUser, this.authService.getUserDetails())
    .subscribe(u => {
      this.user = [];
      // console.log(u,currentUser, this.authDetails);
      this.user.push(u);
      this.userInfo.next(this.user);
    });
  }
}
