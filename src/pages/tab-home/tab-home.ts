import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';




@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  tweetcontent;
  tweets: any;
  t_title;
  background= [];
  constructor(private userActivity: UseractivityProvider) {
    // console.log('on home tab');

    this.tweets = userActivity.usersTweets;
    this.getTweet();
     this.checkVerification();
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
  // Creating Tweeet
  createTweet() {
    this.userActivity.createTweet(this.tweetcontent, this.t_title);
}
checkVerification() {
   console.log('ver');  
   //uncommen for going to verify
  // this.userActivity.checkVerification();
}
goTop() {
  console.log('scrolling');
  window.scroll(0,0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
}
