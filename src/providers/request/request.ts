import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { RequestModel } from '../../Models/request_model';
import { configrequests, configrequested } from '../../Models/users_firestore';
import { map } from 'rxjs/operators';



@Injectable()
export class RequestProvider {
  userid;
  requested_ref: AngularFirestoreCollection<RequestModel>;
  requests_ref: AngularFirestoreCollection<RequestModel>;
  loggedUid;
  requested;
  constructor(public http: HttpClient, private shared: SharedProvider, private dataService: DataProvider) {
    //Logged user from data provider
    this.dataService.loggedUId.subscribe(data => {
      this.loggedUid = data;
    });

    //Requests and Requested 
    this.dataService.searchUser.subscribe(data => {
    this.userid = data;
      

    this.shared.db.collection('users').ref.where('userid','==',this.userid).get().then(snap => {  
      snap.forEach(doc => {
         console.log(doc.id);
        this.requested_ref = this.shared.db.doc(`users/${doc.id}`).collection<RequestModel>(configrequested.collection_endpoint);
        this.requests_ref = this.shared.db.doc(`users/${doc.id}`).collection<RequestModel>(configrequests.collection_endpoint);
        
        

        this.getRequested();

        //Get If request is already gone
        // this.requests_ref.ref.where('userid','==',this.loggedUid).onSnapshot(data => {
        //   console.log(data.size);
        // })


      })
    })
    });
  }
  getRequested() {
    console.log('getrequest call');
    //Get all requests
    this.requested_ref.ref.where('userid','==',this.loggedUid).onSnapshot(changes => {
      if(changes.size > 0) {
        console.log('requested change');
        this.requested = true;
      }
      else {
        console.log('not requested change')
        this.requested = false;
      }
    });
    this.requested = false;
  }
  
}
