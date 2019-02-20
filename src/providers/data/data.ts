import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { UserProvider } from '../../providers/user/user';
import { AuthProvider, UserDetails, TokenPayload } from '../../providers/auth/auth';


// export class User {
//   currentUser: UserDetails;
//   userInfo: UserInfo;
// };

@Injectable()
export class DataProvider {  
  constructor(private authService: AuthProvider, private userService: UserProvider) {
    this.changeUserModel();
    
  }
  changeUserModel() {
    console.log(this.authService.currentUserValue.email);
  }
  
}
