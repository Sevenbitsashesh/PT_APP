import { Component } from '@angular/core';
import { TweetModel, LikeModel } from '../../Models/tweet_model';
import { TweetProvider } from '../../providers/tweet/tweet';

 
@Component({
  selector: 'tweetslist',
  templateUrl: 'tweetslist.html'
})
export class TweetslistComponent {
  tweetcontent;
  tweets = [];
  t_title;
  background= [];
  users = [];
  showing;
  constructor(private tweetService: TweetProvider) {
    // tweetService.getTweetById()
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
        
  }
  onUnLike(likeDoc) {
    
}

}
