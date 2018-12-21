import { Component, Input } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { UserDetails } from 'src/Models/users.details';

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
  searchModel: UserDetails;
  avatar;
  constructor(private dataService: DataProvider, private userActivity: UseractivityProvider) {
    this.dataService.searchUser.subscribe(search => this.userid = search);
    this.searchUser();
  }
  searchUser() {
    this.searchModel  = this.userActivity.getSearchUserModel(this.userid);
    if(this.searchModel !== undefined) 
    {
      console.log('user view:', this.searchModel);
    this.avatar = this.searchModel.profile_pic;
    }
  }
}
