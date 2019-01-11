import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { SharedProvider } from '../shared/shared';
import { TweetModel } from '../../Models/tweet_model';


@Injectable()
export class TweetsProvider {
  userid;
  tweets: TweetModel;
  constructor(public http: HttpClient,private shared: SharedProvider, private dataService: DataProvider) {
    dataService.searchUser.subscribe(user => {
      this.userid = user;
     
    });
    this.getTweets();
  }
  // Start From here 
  getTweets() {
    this.shared.db.collection('users').ref.where('userid','==',this.userid).onSnapshot(data => {
      data.forEach(item => {
        item.ref.collection('tweets').get().then(tweets => {
        
          // console.log(tweets.size);
          tweets.forEach(tweet => {
            // this.tweets = tweet;    
          })
        })
      })
    })
  }
}
