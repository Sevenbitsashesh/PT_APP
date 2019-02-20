import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { SharedProvider } from '../shared/shared';
import { TweetModel } from '../../Models/tweet_model';


@Injectable()
export class TweetsProvider {
  userid;
  tweets: TweetModel[] = [];
  constructor(public http: HttpClient,private shared: SharedProvider, private dataService: DataProvider) {
    // dataService.searchUser.subscribe(user => {
    //   this.userid = user;
    //   this.tweets = [];
    //      this.getTweets();

    // });
  }
  // Start From here 
  getTweets() {
  //   this.shared.db.collection('users').ref.where('userid','==',this.userid).onSnapshot(data => {
  //     data.forEach(item => {
  //       this.shared.db.collection<TweetModel>(`users/${item.id}/tweets`).snapshotChanges().subscribe(tweets => {
  //         tweets.forEach(tweet => {
  //           this.tweets.push(tweet.payload.doc.data());
  //           console.log(this.tweets);
  //         })
  //       })
  //   })
  // })
}
}
