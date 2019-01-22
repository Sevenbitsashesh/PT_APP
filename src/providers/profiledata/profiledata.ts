import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { UseractivityProvider } from '../useractivity/useractivity';


@Injectable()
export class ProfiledataProvider {

  constructor(public http: HttpClient, private shared: SharedProvider, private uactivity: UseractivityProvider) {
    this.getProfile();
    uactivity.getTweets
  }
  getProfile() {
    
    this.shared.db.collection('users').ref.where('email','==',this.shared.loggedUser).onSnapshot(data => {
      data.forEach(items => {
       this.uactivity.getTweets(items.id).subscribe(i => {
         i.forEach(t => {
           
         })
       });
        
      })
    })
  }
}
