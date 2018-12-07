import { Component, Injectable, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoginComponent } from '../login/login';
import { HomePage } from '../../pages/home/home';
import { Router } from '@angular/router';

/**
 * Generated class for the FirstComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'first',
  templateUrl: 'first.html'
})

@Injectable()
export class FirstComponent {
  firsttime = "load";
   // @ViewChild('myNav') nav: NavController
  constructor(private route: Router) {
  }
  set() {
    localStorage.setItem('firsttime', this.firsttime);
      //  this.nav.push(LoginComponent);
      this.route.navigate(['/login  ']);
  }
}
