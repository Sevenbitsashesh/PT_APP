import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { RequestModel } from '../../Models/request_model';
import { appconfigs } from '../../Models/users_firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FollowingModel } from '../../Models/following';



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
    this.dataService.loggedUId.subscribe(data => {  
      this.loggedUid = data;
    });

    //Requests and Requested 
    this.dataService.searchUser.subscribe(data => {
    this.userid = data;
      


    this.shared.db.collection('users').ref.where('userid','==',this.userid).get().then(snap => {  
      snap.forEach(doc => {
         console.log(doc.id);
        
        
        
        
        this.getRequests(doc.id);
       this.getRequested(doc.id);
        this.getFollow(doc.id);
        


      })
    })
    });
  }
  getRef(doc,ref) {
    return this.shared.db.doc(`users/${doc}`).collection<RequestModel>(ref);
  }
  
  getRequests(docid) {
    this.shared.db.collection('users').ref.where('userid','==',this.loggedUid).onSnapshot(user => {
      user.forEach(data => {
        this.getRef(docid,appconfigs.collection_requested).ref.where('docid','==',data.id).onSnapshot(requested => {          
          this.getRef(data.id,appconfigs.collection_requests).ref.where('docid','==',docid).onSnapshot(requests => {
            if(requested.size > 0 && requests.size > 0) {
              this.changeRequests(true);
            }
             else {
               this.changeRequests(false);
             }
          });
        });
      })
    })
  }
  changeRequests(requestsVal) {
    this.requestsVal.next(requestsVal);
  }
  getRequested(docid) { 
    // chekc whether requested
    this.shared.db.collection('users').ref.where('userid','==',this.loggedUid).onSnapshot(user => {
      user.forEach(data => {
        this.getRef(docid,appconfigs.collection_requests).ref.where('docid','==',data.id).onSnapshot(requests => {
          this.getRef(data.id,appconfigs.collection_requested).ref.where('docid','==',docid).onSnapshot(requested => {
            console.log('requested',requested.size);
            
            if(requests.size > 0 && requested.size > 0) {
              this.changeRequested(true);
            }
            else {
              this.changeRequested(false);
            }
          })
        })
      })
    
    });
}

changeRequested(requestedVal) {
  this.requestedVal.next(requestedVal);
}
request() {
  this.getLoggedDoc().onSnapshot(items => {
    items.forEach(user => {
      this.getUserDoc().get().then(snap => {  
        snap.forEach(doc => {      
          this.getRef(doc.id,appconfigs.collection_requests).ref.add({docid: user.id}).then(data => {                
                console.log('mid',user.id);                
            this.getRef(user.id,appconfigs.collection_requested).add({docid: doc.id }).then(r => {

              this.shared.callToast('Request Sent successfully');
            })
              
            
            
            
          });
        })
      });
    })
    })
    
  
}  

cancelRequest() {
  this.getLoggedDoc().onSnapshot(data => {
    data.forEach(user => {
      this.getUserDoc().onSnapshot(data2 => {
        data2.forEach(user2 => {
          this.getRef(user.id, appconfigs.collection_requested).ref.where('docid','==',user2.id).get().then(requested => {
            requested.docs.forEach(i => {
              i.ref.delete();
              // console.log('deleting',i.id);
            })
          })
        })
      })
      
    })
  })
  
  this.getUserDoc().onSnapshot(data => {
    data.forEach(user => {
      this.getLoggedDoc().onSnapshot(data2 => {
        data2.forEach(user2 => {
          this.getRef(user.id,appconfigs.collection_requests).ref.where('docid','==', user2.id).get().then(requests => {
            requests.docs.forEach(i => {
              i.ref.delete();
              // console.log('deleting',i.id);
            })
          })
        })
      })
      
    })
  })
    
      
  
}
accept() {
  
  this.getLoggedDoc().get().then(data => {
    data.forEach(items => {
      this.getUserDoc().get().then(data2 => {
        data2.forEach(items2 => {
          this.shared.db.collection(`followers`).ref.where('docid','==', items.id).get().then(dataFlr => {
            dataFlr.forEach(itemFlr => {
              itemFlr.ref.collection('follow').add({user: items2.id}).then(followers => {
                this.shared.db.collection(`followings`).ref.where('docid','==',items2.id).get().then(dataFlw => {
                    dataFlw.forEach(itemFlw => {
                      itemFlw.ref.collection('follow').add({user: items.id}).then(added => {
                        this.shared.callToast('Request Accepted');
                        this.delete();
                      })
                    })
                })
              })
            })
          })
        })
      })
        
    })
  }) 
}
reject() {
  this.delete();
}
delete() {
  this.getLoggedDoc().get().then(data => {
    data.forEach(items => {
      this.getUserDoc().get().then(data2 => {
        data2.forEach(items2 => {
          this.getRef(items.id,appconfigs.collection_requests).ref.where('docid','==',items2.id).get().then(requests => {
            
            this.getRef(items2.id,appconfigs.collection_requested).ref.where('docid','==',items.id).get().then(requested => {
              requests.docs.forEach(i => {
                i.ref.delete();
              })
              requested.docs.forEach(i2 => {
                i2.ref.delete();
              })
              console.log('deleting',requests.size,requested.size);
            })
          })
        })
      })
      
    })
  })
}
getLoggedDoc() {
  return this.shared.db.collection('users').ref.where('userid','==',this.loggedUid);
}
getUserDoc() {
  return this.shared.db.collection('users').ref.where('userid','==',this.userid);
}
getFollow(docid) {
this.getLoggedDoc().get().then(userdata => {
  userdata.forEach(useritem => {
    this.shared.db.collection(`followers`).ref.where('docid','==',docid).get().then(data => {
      data.forEach(items => {
        items.ref.collection('follow').where('user','==',useritem.id).get().then(follow => {
            if(follow.size > 0) {
              this.changeFollow(true);
            }
            else {
              this.changeFollow(false);
            }
        })
      })
    })
  })
})
  
}
changeFollow(follow) {
this.followVal.next(follow);
}
getFollowRef(docid,ref) {
  return this.shared.db.collection(ref).ref.where('docid','==',docid);
}
unfollow() {
  console.log('unfollowing');
  this.getLoggedDoc().get().then(data => {
    data.forEach(items => {
      this.getUserDoc().get().then(data2 => {
        data2.forEach(items2 => {
      this.getFollowRef(items2.id,appconfigs.collection_followers).get().then(followerRef => {
        followerRef.forEach(f => {
          
          f.ref.collection('follow').where('user','==',items.id).get().then(flrs => {
                flrs.docs.forEach(followers => {
                  // console.log('deleting',followers.id);
                  followers.ref.delete();
                })
              })

                this.getFollowRef(items.id,appconfigs.collection_followings).get().then(followingRef => {
                  followingRef.forEach(f2 => {
                    f2.ref.collection('follow').where('user','==',items2.id).get().then(flwing => {
                        flwing.forEach(followings => {
                          // console.log('deleting',followings.id);
                          followings.ref.delete();
                        })
                    })
                  })
              })              
          

              
            })
          })
          
        })
      })
    })
  })
}
}
