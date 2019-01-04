import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class FollowProvider {
  loggedUid;
  users: any[] = [];
  private userfollowings = new BehaviorSubject([]);
  userFollowingsObs = this.userfollowings.asObservable();
  constructor(public http: HttpClient, private shared: SharedProvider, private dataService: DataProvider) {
    //Get Followig Users
    this.dataService.loggedUId.subscribe(data => {  
      this.loggedUid = data;
      console.log('checking followings for',this.loggedUid);
      this.shared.db.collection('users').ref.where('userid','==',this.loggedUid).get().then(userdocs => {
        userdocs.forEach(user => {
          console.log('logged user',user.id);
          this.getRef(user.id).get().then(follows => {
            follows.forEach(items => {
              items.ref.collection('follow').get().then(f => {
                f.forEach(followings => {
                  
                  followings.ref.get().then(flrs => {
                    this.users.push(flrs.data()['user']);
                    // console.log(this.users);

                   this.changeFollowings(this.users);
                   
                  })
                })
              });
            })
          })
        })
      })
    });
}
getRef(docid) {
  return this.shared.db.collection('followings').ref.where('docid','==',docid);
}
changeFollowings(users: any[]) {
this.userfollowings.next(users);
}
}