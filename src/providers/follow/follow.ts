import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { BehaviorSubject } from 'rxjs';
import { appconfigs } from '../../Models/users_firestore';


@Injectable()
export class FollowProvider {
  loggedUid;
  users = [];  
  private userfollowings = new BehaviorSubject([]);
  userFollowingsObs = this.userfollowings.asObservable();
  constructor(private shared: SharedProvider, private dataService: DataProvider) {
    //Get Followig Users
    this.dataService.loggedUId.subscribe(data => {  
      this.loggedUid = data;
      console.log('checking followings for',this.loggedUid);
      this.shared.db.collection('users').ref.where('email','==',this.loggedUid).get().then(userdocs => {
        userdocs.forEach(user => {
          this.users.push(user.id);
          console.log('logged user',user.id);
          this.getRefFlwing(user.id).get().then(follows => {
            console.log('counting');
            follows.forEach(items => {
              items.ref.collection('follow').get().then(f => {
                
                f.forEach(followings => {
                  
                  followings.ref.get().then(flrs => {     
                    console.log(flrs.data()['user']);
                      this.users.push(flrs.data()['user']);
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
getRefFlwing(docid) {
  return this.shared.db.collection(appconfigs.collection_followings).ref.where('docid','==',docid);
}
getRefFlwrs(docid) {
  return this.shared.db.collection(appconfigs.collection_followers).ref.where('docid','==',docid);
}
changeFollowings(users: any[]) {
this.userfollowings.next(users);
}
getFollowers(docid) {
   this.shared.userscollection.doc(docid).collection('')
}
}