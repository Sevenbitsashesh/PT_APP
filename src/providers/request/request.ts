import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { RequestModel } from '../../Models/request_model';
import { configrequests, configrequested } from '../../Models/users_firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FollowingModel } from '../../Models/following';



@Injectable()
export class RequestProvider {
  private requestsVal = new BehaviorSubject('');
  requestsValObs = this.requestsVal.asObservable();
  private requestedVal = new BehaviorSubject('');
  requestedValObs = this.requestedVal.asObservable();
  userid;
  requested_ref: AngularFirestoreCollection<RequestModel>;
  requests_ref: AngularFirestoreCollection<RequestModel>;
  requests_doc: AngularFirestoreDocument<RequestModel>;
  requested_doc: AngularFirestoreDocument<RequestModel>;
  follow_ref: AngularFirestoreCollection<FollowingModel>;
  loggedUid;
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
        
        
        
        this.getRequests();
       this.getRequested();

        //Get If request is already gone
        // this.requests_ref.ref.where('userid','==',this.loggedUid).onSnapshot(data => {
        //   console.log(data.size);
        // })


      })
    })
    });
  }
  getRequests() {
    
    //Get all requests
    this.requested_ref.ref.where('userid','==',this.loggedUid).onSnapshot(requested => {
      this.shared.db.collection('users').ref.where('userid', '==', this.loggedUid).onSnapshot(snap => {
        snap.forEach(data => {
          this.requests_ref = this.shared.db.doc(`users/${data.id}`).collection<RequestModel>(configrequests.collection_endpoint);
          this.requests_ref.ref.where('userid','==',this.userid).onSnapshot(requests => {
            console.log('requests', requests.size);
            console.log('requests', requested.size);
            if(requests.size > 0 && requested.size > 0) {
              this.changeRequests(true);
            }
            else {
              this.changeRequests(false);
            }
          })
        })        
      })
    });
  }
  changeRequests(requestsVal) {
    this.requestsVal.next(requestsVal);
  }
  getRequested() { 

    // chekc whether requested
  
    this.requests_ref.ref.where('userid','==',this.loggedUid).onSnapshot(requested => {
    this.shared.db.collection('users').ref.where('userid','==',this.loggedUid).onSnapshot(snap => {
      snap.forEach(data => {
        
        this.requested_ref = this.shared.db.doc(`users/${data.id}`).collection<RequestModel>(configrequested.collection_endpoint);
        this.requested_ref.ref.where('userid','==',this.userid).onSnapshot(items => {
         
          
            console.log('requested', requested.size);
            console.log('items', items.size);
            if(requested.size > 0 && items.size > 0) {              
              this.changeRequested(true);
            }
            else {
              this.changeRequested(false);
            }
          
          
         });
          
          
        })
      })
    })
}
changeRequested(requestedVal) {
  this.requestedVal.next(requestedVal);
}

request() {
  this.shared.db.collection('users').ref.where('userid','==',this.userid).get().then(snap => {  
    snap.forEach(doc => {
      console.log(doc.id);  
      this.requests_ref = this.shared.db.doc(`users/${doc.id}`).collection<RequestModel>(configrequests.collection_endpoint);
      this.requests_ref.ref.add({userid: this.loggedUid}).then(data => {

        this.shared.db.collection('users').ref.where('userid','==', this.loggedUid).get().then(items => {
          items.forEach(i => {
            console.log('mid',i.id);
            this.requested_ref = this.shared.db.doc(`users/${i.id}`).collection<RequestModel>(configrequested.collection_endpoint);
        this.requested_ref.add({userid: this.userid }).then(r => {
          this.shared.callToast('Request Sent successfully');
        })
          })
        })
        
        
      });
    })
  });

}  
cancelRequest() {
  this.shared.db.collection('users').ref.where('userid','==',this.loggedUid).onSnapshot(data => {
    data.forEach(items=> {
      this.requested_ref = this.shared.db.doc(`users/${items.id}`).collection(configrequested.collection_endpoint);
      this.requested_ref.ref.where('userid','==', this.userid).get().then(requested => {
        requested.docs.forEach(i => {
          console.log('deleting',i.id);
          i.ref.delete();
        })
      });
    })
  })
    
      
  this.shared.db.collection('users').ref.where('userid','==',this.userid).onSnapshot(data => { 
    data.forEach(items => {
      this.shared.db.doc(`users/${items.id}`).collection(configrequests.collection_endpoint).ref.where('userid','==',this.loggedUid).get().then(requests => {
          requests.docs.forEach(i => {
            console.log('deleting',i.id);
            i.ref.delete();
          })
      })
    })
  })
     

  
}
accept() {
  console.log('request accepted');

    this.shared.db.collection(`followers`).ref.where('userid','==',this.loggedUid).get().then(data => {
      data.forEach(items => {
        this.shared.db.collection(`followers/${items.id}/follow`).add({user: this.userid}).then(added => {
          
        })
      })
    })
    
}
}
