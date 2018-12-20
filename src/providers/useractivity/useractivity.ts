import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { UserDetails } from 'src/Models/users.details';
import { SharedProvider } from '../shared/shared';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { TweetModel } from '../../Models/tweet_model';
import { configtweets } from '../../Models/users_firestore';
@Injectable()
export class UseractivityProvider {
  model;
  loggedUser;
  usercollection;
  usersDoc: AngularFirestoreDocument<UserDetails>;
  uid;
  tweetmodel: TweetModel;
  tweetscollection: AngularFirestoreCollection<TweetModel>;
  usersTweets = [];
  constructor(public http: HttpClient, private sharedProvider: SharedProvider, public db: AngularFirestore) {
    console.log('Hello UseractivityProvider Provider');
    this.model = sharedProvider.model;
    this.loggedUser = sharedProvider.loggedUser;
    console.log('welcome', this.loggedUser);
    this.getUsername();
  }
  // Adding user info
addInfo(model) {
  this.sharedProvider.saveProfile(model, this.uid);
  // this.userscollection.add(model);
  // this.db.collection<UserDetails>
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
          this.getTweets(this.uid);
  
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

    getTweets(uid) {

      // Getting Logged users Tweet
      this.tweetscollection = this.db.collection('users').doc(uid).collection<TweetModel>(configtweets.collection_endpoint);
      const observer  = this.tweetscollection.snapshotChanges().
      pipe(map(docArray => {
         return docArray.map(data => {

        return ( {tweetcontent: data.payload.doc.data()['tweetcontent'], t_title: data.payload.doc.data()['t_title'],
        t_date: data.payload.doc.data()['t_date']
        });
      });
    } )
    ).subscribe(tweets => {
      [].push.apply(this.usersTweets, tweets);
      console.log('t:', this.usersTweets);
    });
  }
}
