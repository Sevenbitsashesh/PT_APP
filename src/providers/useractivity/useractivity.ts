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
import { AngularFireStorage } from 'angularfire2/storage';
import { DataProvider } from '../data/data';
import { LoadingController } from 'ionic-angular';
import { FollowingModel } from '../../Models/following';
@Injectable()
export class UseractivityProvider {
  model;
  loggedUser;
  usercollection;
  // usersDoc: AngularFirestoreDocument<UserDetails>;
  uid;
  tweetmodel: TweetModel;
  tweetscollection: AngularFirestoreCollection<TweetModel>;
  usersTweets = [];
  myPhotoURL: Observable<String>;
  myPhoto;
  usersearched;
  verification;
  searchModel;;
  searchData: UserDetails[];
  constructor(public http: HttpClient, private sharedProvider: SharedProvider, public db: AngularFirestore,private fstorage: AngularFireStorage, private dataService: DataProvider, private loader: LoadingController) {
    console.log('Hello UseractivityProvider Provider');
    this.model = sharedProvider.model;
    // this.searchModel = sharedProvider.searchModel;
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
        // Verification Details
        if(this.model.verified === false) {
          this.verification = false;
        }
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
  // Upload Photo to firestorage
  public uploadPhoto(profilepic) {
    const file = 'data:image/jpg;base64,' + profilepic;
    const fileRef =  this.fstorage.ref('/profile/' + this.generateUUID() + '.jpg');
    const stor_task = fileRef.putString(file, 'data_url');
    // const donUrl = stor_task.snapshotChanges().pipe(finalize(() => {
    //     fileRef.getDownloadURL().subscribe(url => {
    //       this.myPhoto = url;
    //       console.log(url);
    //     });
    // }));
    stor_task.snapshotChanges().pipe(
      finalize(() => {
        this.myPhotoURL = fileRef.getDownloadURL();
        this.myPhotoURL.subscribe(url => {
          if (url) {
        this.myPhoto = url;
         this.sharedProvider.saveProfilePic(url, this.uid);
          }
        });
      }
      )
    ).subscribe();
  }
  //Generate unique uuid for Image
  private generateUUID(): any {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
  call() {
    this.sharedProvider.callToast('hi');
  }
  // Tweeet create
  createTweet(tweetcontent, t_title) {
    this.tweetmodel = {
      tweetcontent: tweetcontent,
      tweetid: Math.random().toString(14),
      t_title: t_title,
      t_date: this.sharedProvider.getTodayDate()
    };
    const tweetColl = this.db.collection('users').ref.where('email', '==', this.loggedUser);
    console.log(this.loggedUser);
    tweetColl.onSnapshot(snap => {
    snap.forEach(data => {
      this.tweetscollection.add(this.tweetmodel);
      
    }
    );
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
   //  const us = u.find.name
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
  
}
