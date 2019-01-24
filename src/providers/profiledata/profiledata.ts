import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { UseractivityProvider } from '../useractivity/useractivity';
import { UserDetails, FollowingModel } from 'Models/users.details';
import { TweetModel } from 'Models/tweet_model';


@Injectable()
export class ProfiledataProvider {
  Flwrs: FollowingModel[] = [];
  Flwings: FollowingModel[] = [];;
  tweets:TweetModel[] = [];
  constructor(public http: HttpClient, private shared: SharedProvider, private uactivity: UseractivityProvider) {
    this.getProfile();    
  }
  getProfile() {
    
    this.getUser().onSnapshot(data => {
      
      data.forEach(items => {
        //Get Tweets data
      const tweetSub = this.uactivity.getTweets(items.id).subscribe(data2 => {
         data2.forEach(i => { 
           this.tweets.push(i);
           
         });
         tweetSub.unsubscribe();
       });     
       //Get Followers Data
      this.uactivity.getFollowers(items.id).onSnapshot(snapFlwrs => {
        snapFlwrs.forEach(items => {
          if(items.exists) {
            this.Flwrs.push({user: items.id});
          }          
        });        
      });
      //Get Followings Data
      this.uactivity.getFollowings(items.id).onSnapshot(snapFlwings => {
        snapFlwings.forEach(items => {
          if(items.exists) {
            this.Flwings.push({user: items.id});
          }
        })
      })
      })
      
    })
  }
  getUser() {
    return this.shared.db.collection<UserDetails>('users').ref.where('email','==',this.shared.loggedUser);
  }
  getTweets(did) {
    return this.shared.db.collection<TweetModel>(`users/${did}/tweets`);
  }
}