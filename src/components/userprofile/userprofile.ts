import { Component, Input, ViewChild } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from '../../Models/users.details';
import { RequestProvider } from '../../providers/request/request';
import { RequestModel } from '../../Models/request_model';
import { UserfollowProvider } from '../../providers/userfollow/userfollow';
import { Observable } from 'rxjs';
import { Slides } from 'ionic-angular';


/**
 * Generated class for the UserprofileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
  constructor(private userActivity: UseractivityProvider, private dataService: DataProvider,private requestService: RequestProvider, private userFlwService: UserfollowProvider) {
    this.dataService.searchUser.subscribe(search => this.userid = search);
    
    this.searchUser();
    this.requestService.requestsValObs.subscribe(requests => {
      this.requests = requests;
    });
    this.requestService.requestedValObs.subscribe(requested => {
      this.requested = requested;
    });
    this.requestService.followValObs.subscribe(follow => {
      this.following = follow;
    });
    userFlwService.getFollow();
  }
  searchUser() {
    // this.userActivity.callLoader();
    
      return this.dataService.getSearchUserModel(this.userid)      
    
    .subscribe(data => {
  
 
      this.userModel = data;
      this.dataService.changeUserModel(this.userModel);
        // this.flwrs = this.userModel[0].followers.length;
        // this.flwings = this.userModel[0].followings.length;
      
    
  });

//  .subscribe(data => {
  
 
//     this.userModel = data;
//     this.dataService.changeUserModel(this.userModel);
//     this.flwrs = this.userModel[0].followers.length;
//     this.flwings = this.userModel[0].followings.length;
    
  
// });
// this.userActivity.dismissLoader();
  }
  follow() {
    this.requestService.request();
  }
  cancelRequest() {
    this.requestService.cancelRequest();
  }
  reject() {
     this.requestService.reject();
  }
  accept() {
    this.requestService.accept();
  }
  unfollow() {
    this.requestService.unfollow();
  }
  sliderChange(s) {
    
    this.slides.slideTo(s,500);
  }
}
