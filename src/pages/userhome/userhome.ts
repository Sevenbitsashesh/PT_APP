import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';
import { slideInAnimation } from '../../providers/animation/animation';



@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
  animations: [slideInAnimation]
})
export class UserhomePage {
  
  constructor(private authService: AuthProvider, private router: Router) {    
  
    // sharedService.getCred();  
    // sharedService.checkLogin();       
    authService.checkLogin();
  }
  prepareRoute(outlet: RouterOutlet) {
    // console.log(outlet.activatedRoute);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  

  
}
