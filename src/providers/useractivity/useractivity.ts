import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { UserDetails } from 'src/Models/users.details';
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
  hide = false;
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
// getTweets(uid) {
//   console.log(uid);
  
//   this.sharedProvider.db.collection('users').doc(uid).collection<TweetModel>('tweets').ref.get().then(data => {
    
//     data.forEach(items => {
//       if(this.usersTweets.find(tweet => tweet.t_title == (items.data()['t_title'])) === undefined) {
        
        
//         console.log('called',items.data());
//         this.usersTweets.push(items.data());
//       }
        
      
      
//     })
//   })
  
// }

    getTweets(uid) {

      // Getting Logged users Tweet
      console.log('for',uid);
      this.sharedProvider.userscollection.doc<UserDetails>(uid).get().subscribe(user => {
        const tweetsRef = this.db.collection('users').doc(uid).collection<TweetModel>(appconfigs.collection_tweets);     
        tweetsRef.snapshotChanges().
            pipe(map(docArray => {
         return docArray.map(data => { 
           
        return ( 
          {tweetid: data.payload.doc.id, tweetcontent: data.payload.doc.data()['tweetcontent'], t_title: data.payload.doc.data()['t_title'],
        t_date: data.payload.doc.data()['t_date'],t_image: data.payload.doc.data()['t_image'],t_user: 'a',t_user_pic: '', likeDoc: data.payload.doc.data()['likeDoc'], liked: [] = [], like: false
        }
        );
      });
    } ))
        
        .subscribe(data => {
          
          data.forEach(items => {
            
            if(this.usersTweets.find(tweet => tweet.t_title == items.t_title) === undefined) {
             items.t_user = user.data()['userid'];
             items.t_user_pic = user.data()['profile_pic'];    
                      
            console.log(items.tweetid);
            
            if(items.likeDoc !== undefined) {
                this.getLikes(items.likeDoc).subscribe(dataLikes => {
                  items.liked = [];
                  
                  dataLikes.forEach(itemsLikes => {
                    
                    items.liked.push(itemsLikes.payload.doc.data()['user']);                    
                  })
                })
            }
            this.usersTweets.push(items);
            this.hide = true;
                console.log('t:', this.usersTweets);
          }
        })
        
        })
       
      });    
            
  }
  //   getTweets(uid) {

  //     // Getting Logged users Tweet
  //     console.log('for',uid);
  //     this.tweetscollection = this.db.collection('users').doc(uid).collection<TweetModel>(appconfigs.collection_tweets);
  //     const observer  = this.tweetscollection.snapshotChanges().
  //     pipe(map(docArray => {
  //        return docArray.map(data => {

  //       return ( {tweetcontent: data.payload.doc.data()['tweetcontent'], t_title: data.payload.doc.data()['t_title'],
  //       t_date: data.payload.doc.data()['t_date'],t_image: data.payload.doc.data()['t_image']
  //       });
  //     });
  //   } )
  //   ).subscribe(tweets => {
  //     this.usersTweets = tweets;
  //     // [].push.apply(this.usersTweets, tweets);
  //     console.log('t:', this.usersTweets);
  //   });
  // }
  // Upload Photo to firestorage
  public uploadPhoto(profilepic) {
    const file = 'data:image/jpg;base64,' + profilepic;
    const fileRef =  this.fstorage.ref('/profile/' + this.generateUUID() + '.jpg');
    const stor_task = fileRef.putString(file, 'data_url');
   
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
    tweetColl.onSnapshot(snap => {
    snap.forEach(data => {
      
      this.tweetscollection = this.db.collection('users').doc(data.id).collection<TweetModel>(appconfigs.collection_tweets);  
      this.tweetscollection.add(this.tweetmodel).then(tweeted => {
        console.log(tweeted.id);
        this.sharedProvider.db.collection('liked').ref.add({tweet: tweeted.id}).then(data => {
          tweeted.set({liked: data.id},{merge: true})
        })
      });
      console.log('tweet uploaded');
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
  saveprofilePic(url) {
    // console.log('profile pic changed',url);
      this.sharedProvider.saveProfilePic(url,this.uid);
  }
  getLikes(docid) {
    console.log(docid);
   return this.sharedProvider.db.collection(appconfigs.collection_liked + '/' + docid + '/' + appconfigs.collection_by).snapshotChanges();
  }
}
