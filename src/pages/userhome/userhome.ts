import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { ActivatedRoute } from '@angular/router';



@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
})
export class UserhomePage {
  
  constructor(private sharedService: SharedProvider) {    
    // sharedService.getCred();  
    sharedService.checkLogin();       
  }

  

  
}
