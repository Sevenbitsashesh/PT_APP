import { Component } from '@angular/core';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { FollowProvider } from '../../providers/follow/follow';
import { LikeProvider } from '../../providers/like/like';
import { TweetModel, LikeModel } from 'src/Models/tweet_model';
 
@Component({
  selector: 'tweetslist',
  templateUrl: 'tweetslist.html'
})
export class TweetslistComponent {
  tweetcontent;
  tweets: TweetModel[];
  t_title;
  background= [];
  users = [];
  showing;
  constructor(private userActivity: UseractivityProvider, private followService: FollowProvider, private likeService : LikeProvider) {
    
    // this.matProgress.
    // this.getTweet();
    followService.userFollowingsObs.subscribe(items => {
     this.users = items;
        });
        this.users.forEach(i => {          
          this.userActivity.getTweets(i);
          // console.log(this.userActivity.usersTweets);
          this.tweets = userActivity.usersTweets;           
          this.showing = this.userActivity.hide; 
          this.tweets.forEach(tweet => {
            tweet.liked.forEach(users => {              
              likeService.getLoggedU().get().then(user => {  
                user.forEach(u => {

                  if(users.user === u.id) {
                     tweet.like = true;
                  }
                  else {
                    tweet.like = false;
                  }
                })
              })
            })
            
          })
       });

  }
  getTweet() {
    console.log('data :', this.tweets.length );
    for (let index = 0; index < this.tweets.length; index++) {
      this.background.push(this.getRandomColor());
    }
    console.log('back', this.background[0]);
     this.background.push();
 }
 getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return "#" + ("000000" + color).slice(-6);
  }
  onLike(likeDoc) {    
    this.likeService.getLoggedU().get().then(users => {
      users.forEach(user => {
        this.likeService.giveLike(likeDoc,user.id).then(success => {
          console.log('liked succes', success.id);
        })
      })
    })
     
  }
}
