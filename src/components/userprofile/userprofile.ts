import { Component, Input, ViewChild, AfterViewInit, AfterViewChecked, DoCheck, OnInit, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from '../../Models/users.details';
import { RequestProvider } from '../../providers/request/request';
import { RequestModel } from '../../Models/request_model';
import { Observable } from 'rxjs';
import { Slides } from 'ionic-angular';
import { FeedsComponent } from '../feeds/feeds';




@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofileComponent {
  @ViewChild(Slides) slides: Slides;
  //searching userid  
  userid;
  userModel: UserDetails[];
  requests;
  requested;
  following;
  constructor(private userActivity: UseractivityProvider, private dataService: DataProvider) {
    
    this.dataService.searchUser.subscribe(search => {
      this.userid = search
    }
      );
   
    this.searchUser();
   
    
  }
    searchUser() {
    
    
      return this.dataService.getSearchUserModel(this.userid)      
    
    .subscribe(data => {
  
 
      this.userModel = data;
      this.dataService.changeUserModel(this.userModel);

      
    
  });


  }
 
  sliderChange(s) {  
    this.slides.slideTo(s,500);
  }
}
