import { Component, Injectable } from '@angular/core';
import { HometabComponent } from '../../components/hometab/hometab';
import { Router } from '@angular/router';
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

  
  constructor(private route: Router) {
    console.log('Hello UsertabsComponent Component');
  }
goHome() {
this.route.navigate(['/tabs(tab_home:tab_home)']);
}
}
