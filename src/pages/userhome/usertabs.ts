import { Component, Injectable } from '@angular/core';
import { HometabComponent } from '../../components/hometab/hometab';
import { Router } from '@angular/router';
import { SharedProvider } from '../../providers/shared/shared';
/**
 * Generated class for the UsertabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'usertabs',
  templateUrl: 'usertabs.html'
})
@Injectable()
export class UsertabsComponent {

  username: any;
  constructor(private route: Router, private sharedService: SharedProvider) {
    console.log('Hello UsertabsComponent Component');
     this.username = localStorage.getItem('username');
     console.log(this.username);
  }
goHome() {
this.route.navigate(['/userhome']);
}
logout() {
  this.sharedService= undefined;
  localStorage.removeItem('usermail');
   localStorage.removeItem('username');
  // this.sharedService.checkLogin();
  this.route.navigate(['/login']);

}
}
