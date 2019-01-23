import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { UseractivityProvider } from '../useractivity/useractivity';
import { UserDetails } from 'Models/users.details';


@Injectable()
export class ProfiledataProvider {
  totalFlwrs;
  totalFlwings;
  totalTweets;
  constructor(public http: HttpClient, private shared: SharedProvider, private uactivity: UseractivityProvider) {
    this.getProfile();    
  }
  getProfile() {
    
    this.shared.db.collection<UserDetails>('users').ref.where('email','==',this.shared.loggedUser).onSnapshot(data => {
      data.forEach(items => {
       this.uactivity.getTweets(items.id).subscribe(i => {
        //  this.totalTweets = i.length;         
        i.forEach(tweet => {
          
        })
       });
        
      })
    })
  }
}
