import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserDetails } from 'Models/users.details';


@Injectable()
export class ApiProvider {
  userCollection: AngularFirestoreCollection<UserDetails>;  
  constructor(private db: AngularFirestore) {
      this.userCollection = db.collection('users');
  }
  userExist(userid) {
    return this.userCollection.ref.where('userid','==',userid);
  }
}
