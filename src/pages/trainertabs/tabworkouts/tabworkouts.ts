import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { NewworkoutComponent } from '../../../components/newworkout/newworkout';
import { Router } from '@angular/router';




@IonicPage()
@Component({
  selector: 'page-tabworkouts',
  templateUrl: 'tabworkouts.html',
})
export class TabworkoutsPage  {

  
  constructor(private router: Router) {
    
  }

  ionViewDidLoad() {
    // this.nav.push(NewworkoutComponent);

  }
  newWorkout() {
    this.router.navigate(['/newworkout']);
  }  

}
