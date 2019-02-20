import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { RequestModel } from '../../Models/request_model';
import { appconfigs } from '../../Models/users_firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class RequestProvider {
  private requestsVal = new BehaviorSubject('');
  requestsValObs = this.requestsVal.asObservable();
  private requestedVal = new BehaviorSubject('');
  requestedValObs = this.requestedVal.asObservable();
  private followVal = new BehaviorSubject('');
  followValObs = this.followVal.asObservable();
  userid;
  loggedUid;
  constructor(public http: HttpClient, private shared: SharedProvider, private dataService: DataProvider) {
    //Logged user from data provider
    // this.dataService.loggedUId.subscribe(data => {  
    //   this.loggedUid = data;
    // });

    //Requests and Requested 
    // this.dataService.searchUser.subscribe(data => {
    // this.userid = data;    
    // });
  }
  getRef(doc,ref) {
    
  }
  
  getRequests(docid) {
  
  }
  changeRequests(requestsVal) {
    this.requestsVal.next(requestsVal);
  }
  getRequested(docid) { 
    // chekc whether requested
    
}

changeRequested(requestedVal) {
  this.requestedVal.next(requestedVal);
}
request() {
  
  
}  

cancelRequest() {
    
      
  
}
accept() {
  
  
}
reject() {
  this.delete();
}
delete() {
  
}
getLoggedDoc() {
  
}
getUserDoc() {
  
}
getFollow(docid) {

  
}
changeFollow(follow) {
this.followVal.next(follow);
}
getFollowRef(docid,ref) {

}
unfollow() {
  console.log('unfollowing');

}
}
