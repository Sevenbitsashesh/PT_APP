import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from '../../Models/users.details';
import { RequestProvider } from '../../providers/request/request';
import { RequestModel } from '../../Models/request_model';

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
  userModel;
  requests;
  requested;
  constructor(private dataService: DataProvider, private userActivity: UseractivityProvider,private requestService: RequestProvider) {
    this.dataService.searchUser.subscribe(search => this.userid = search);
    
    this.searchUser();
    this.requestService.requestsValObs.subscribe(requests => {
      this.requests = requests;
    });
    this.requestService.requestedValObs.subscribe(requested => {
      this.requested = requested;
    });
  }
  searchUser() {
    // this.userActivity.callLoader();
this.dataService.getSearchUserModel(this.userid).subscribe(data => {
   this.userModel = data;
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
    // this.requestService.cancelRequest();
  }
  accept() {
    this.requestService.accept();
  }
}
