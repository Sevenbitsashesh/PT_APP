import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { UseractivityProvider } from '../useractivity/useractivity';
import { DataProvider } from '../data/data';
import { appconfigs } from '../../Models/users_firestore';
import { LikeModel } from '../../Models/tweet_model';

@Injectable()
export class LikeProvider {
  userid;
  constructor(public http: HttpClient, private shared: SharedProvider, private uactivity: UseractivityProvider, private dataService: DataProvider) {
    dataService.searchUser.subscribe(user => {
      this.userid = user;
    });
  //  shared.db.collection('liked').ref.where('user','==',this.userid).
  }
 
  getLoggedU() {
    console.log('f', this.userid);
       return this.shared.db.collection('users').ref.where('userid','==',this.userid); 
  }
  giveLike(likeDoc,uid) {
    
    return this.shared.db.collection<LikeModel>('liked' + '/' + likeDoc +'/' + 'by').ref.add({user: uid});
  }
}
