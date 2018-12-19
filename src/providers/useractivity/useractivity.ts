import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { UserDetails } from 'src/Models/users.details';
import { SharedProvider } from '../shared/shared';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
@Injectable()
export class UseractivityProvider {
  model;
  loggedUser;
  usercollection;
  usersDoc: AngularFirestoreDocument<UserDetails>;
  uid;

  constructor(public http: HttpClient, private sharedProvider: SharedProvider, public db: AngularFirestore) {
    console.log('Hello UseractivityProvider Provider');
    this.model = sharedProvider.model;
    this.loggedUser = sharedProvider.loggedUser;
    console.log('welcome', this.loggedUser);
    this.getUsername();
  }
  getUsername() {
    console.log('uid', this.loggedUser);
    // Get Logged in user email
    this.db.collection('users').ref.where('email', '==', this.loggedUser).onSnapshot(snap => {
      snap.forEach(change => {
        // Users Profile data set to model
        this.model = change.data();
         console.log('model', this.model);
        localStorage.setItem('username', this.model.userid);
        // Getting Logged user id
         this.uid = change.id;
          // this.getTweets(this.uid);
  
        // console.log('new', this.uid);
      });
      // console.log(this.model.email);
      // Setting Username
      // localStorage.setItem('username', this.model.username);
    });
    // getting users document id
    // this.db.collection('users').ref.get().then((snapshot) => {
    //   snapshot.docs.forEach(doc => {
    //      // console.log(doc.id);
    //    });
    //   });
    }
}
