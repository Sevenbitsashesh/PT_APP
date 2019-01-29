import { Component, Injectable } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginComponent {

  
  
  constructor(private authService: AuthProvider) {
    // sharedService.checkLogin();        
  }
  



  
}
