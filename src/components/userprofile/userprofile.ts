import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from '../../Models/users.details';
import { RequestProvider } from '../../providers/request/request';

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
  avatar;
  userModel;
  constructor(private dataService: DataProvider, private userActivity: UseractivityProvider, private requestProvider: RequestProvider) {
    this.dataService.searchUser.subscribe(search => this.userid = search);
    this.searchUser();
  }
  searchUser() {
    // this.userActivity.callLoader();
this.dataService.getSearchUserModel(this.userid).subscribe(data => {
   this.userModel = data;
});

// this.userActivity.dismissLoader();
    
  }
  

}
