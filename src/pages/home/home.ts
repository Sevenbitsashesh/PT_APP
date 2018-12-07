import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../components/login/login';
import { FirstComponent } from '../../components/first/first';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
  firsttime = 'load';
  constructor(public rout: Router) {
    this.check();
  }
  check() {
    if (localStorage.getItem('firsttime') ===  'load') {
         this.rout.navigateByUrl('/login');
      // this.navCtrl.setRoot(LoginComponent);
      }
      else {
        this.rout.navigateByUrl('/first');
       // this.navCtrl.setRoot(FirstComponent);
      }
  }
    
}
