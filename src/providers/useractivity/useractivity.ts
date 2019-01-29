import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { UserDetails, FollowingModel } from '../../Models/users.details';
import { SharedProvider } from '../shared/shared';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { TweetModel, LikeModel } from '../../Models/tweet_model';
import { appconfigs } from '../../Models/users_firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { DataProvider } from '../data/data';
import { LoadingController } from 'ionic-angular';

import firebase from 'firebase';
@Injectable()
export class UseractivityProvider {
  model;
  loggedUser;
  usercollection;  
  uid;
  tweetmodel: TweetModel;
  tweetscollection: AngularFirestoreCollection<TweetModel>;  
  myPhotoURL: Observable<String>;
  myPhoto;
  verification;
  
  
  
  constructor(private sharedProvider: SharedProvider, public db: AngularFirestore,private fstorage: AngularFireStorage, private dataService: DataProvider, private loader: LoadingController) {
    // console.log('Hello UseractivityProvider Provider');
    this.model = sharedProvider.model;
    
    this.loggedUser = sharedProvider.loggedUser;
    console.log('welcome', this.loggedUser);
    this.getUserModel();
  }
  // Adding user info
addInfo(model) { 
  this.sharedProvider.saveProfile(model, this.uid);
  
}
  getUserModel() {
    console.log('uid', this.loggedUser);
    // Get Logged in user email
    this.db.collection('users').ref.where('email', '==', this.loggedUser).onSnapshot(snap => {
      snap.forEach(change => {
        // Users Profile data set to model
        this.model = change.data();
        // Verification Details
        if(this.model.verified === false) {
          this.verification = false;
        }
        
        localStorage.setItem('username', this.model.userid);
        // Getting Logged user id
         this.uid = change.id ;
          
          
        
      });
      
    });
    
    }

    getTweets(uid) {

      // Getting Logged users Tweet
      // console.log('for',uid);
      this.tweetscollection = this.db.collection('users').doc(uid).collection<TweetModel>(appconfigs.collection_tweets);
      return this.tweetscollection.snapshotChanges().
      pipe(map(docArray => {
        let sorted;
         return docArray.map(data => {          
        return ( {tweetid: data.payload.doc.id, tweetcontent: data.payload.doc.data()['tweetcontent'], t_title: data.payload.doc.data()['t_title'],
        t_date: data.payload.doc.data()['t_date'],t_image: data.payload.doc.data()['t_image'],t_user: '',t_user_pic: '', likeDoc: data.payload.doc.data()['likeDoc'], liked: [] = [], like: false
        });
      });
    } )
    );
  }
  
  

  // Tweeet create
  createTweet(tweetcontent, t_title, t_image) {
    this.tweetmodel = {
      tweetcontent: tweetcontent,
      tweetid: Math.random().toString(14),
      t_title: t_title,
      t_image: t_image,
      t_date: this.sharedProvider.getTodayDate()
    };
    const tweetColl = this.db.collection('users').ref.where('email', '==', this.loggedUser);
    
    console.log(this.loggedUser);
   
     return new Promise(() => {
      tweetColl.onSnapshot(snap => {
        snap.forEach(data => {
          
          this.tweetscollection = this.db.collection('users').doc(data.id).collection<TweetModel>(appconfigs.collection_tweets);  
          this.tweetscollection.add(this.tweetmodel).then(tweeted => {
            console.log(tweeted.id);
            this.sharedProvider.callToast('Tweet Uploaded');
            this.sharedProvider.db.collection('liked').ref.add({docid: data.id}).then(data => {
              tweeted.set({likeDoc: data.id},{merge: true});
            });
          });
          console.log('tweet uploaded');
        }
        );
        });
     });       
  }
  public getAllUsers() {
    const u = [];
     this.db.collection('users').get().forEach(data => {
    data.forEach(user => {
      u.push(user.data());
    });
     });
      return u;
  }
  checkVerification() {
    if(this.verification == false) {
     this.sharedProvider.verify();
    }
 }  
  callLoader() {
    this.sharedProvider.loaderCall();
  }
  dismissLoader() {
    this.sharedProvider.loaderDismiss();
  }
  saveprofilePic(url) {
    // console.log('profile pic changed',url);
      this.sharedProvider.saveProfilePic(url,this.uid);
  }
  getLikes(docid) {
    // console.log(docid);
   return this.sharedProvider.db.collection(appconfigs.collection_liked + '/' + docid + '/' + appconfigs.collection_by).snapshotChanges();
  }
  getUserData(docid) {
    return this.sharedProvider.db.doc<UserDetails>(`users/${docid}/`).snapshotChanges();
  }
  getFollowers(uid) {
   return this.sharedProvider.db.collection<FollowingModel>('followers').ref.where('docid','==',uid);
  }
  getFollowings(uid) {
    return this.sharedProvider.db.collection<FollowingModel>('followings').ref.where('docid','==',uid);
  }
  saveBio(bioText) {
    this.sharedProvider.saveBio(bioText);
  }
}
