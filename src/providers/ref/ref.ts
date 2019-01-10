import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { appconfigs } from '../../Models/users_firestore';
import { FollowingModel } from '../../Models/users.details';



@Injectable()
export class RefProvider {

  constructor(public http: HttpClient, private shared: SharedProvider) {
    
  }
  getFlrs(docid) {
    return this.shared.db.collection(appconfigs.collection_followers).ref.where('docid','==',docid);
  }
  getFlwings(docid) {
  return this.shared.db.collection(appconfigs.collection_followings).ref.where('docid','==',docid);
  }  
  getRefFlw(docid,ref) {
    return this.shared.db.collection<FollowingModel>(ref+'/'+docid+'/'+'follow').valueChanges();
  }
  getRefByUid(userid) {
    return this.shared.db.collection('users').ref.where('userid','==',userid);
  }
}
