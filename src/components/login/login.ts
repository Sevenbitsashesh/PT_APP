import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginComponent {

  
  login;
  constructor(private authService: AuthProvider) {    
    authService.checkLogin();
    this.login = "signin";
    
  }

  



  
}
