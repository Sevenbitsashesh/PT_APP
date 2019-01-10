import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from '../../Models/users.details';
import { RequestProvider } from '../../providers/request/request';
import { RequestModel } from '../../Models/request_model';
import { UserfollowProvider } from '../../providers/userfollow/userfollow';
import { Observable } from 'rxjs';

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

  //searching userid  
  userid;
  userModel: UserDetails[];
  requests;
  requested;
  following;
  $flrs;
  flwings;
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
this.dataService.getSearchUserModel(this.userid).subscribe(data => {
  
 
    this.userModel = data;
    this.dataService.changeUserModel(this.userModel);
    
    
  
});
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
}
