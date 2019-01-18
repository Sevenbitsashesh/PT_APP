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
  tweets = [];
  t_title;
  background= [];
  users = [];
  showing;
  constructor(private userActivity: UseractivityProvider, private followService: FollowProvider, private likeService : LikeProvider) {
    
    // this.matProgress.
    // this.getTweet();
    followService.userFollowingsObs.subscribe(items => {
     this.users = items;
     this.showing = false; 
      this.users.forEach(i => { 
        this.userActivity.getUserData(i).subscribe(userData => {
          this.userActivity.getTweets(i).subscribe(tweets => {
          
            tweets.forEach(t => {
              if(this.tweets.find(f => f.tweetid == t.tweetid) === undefined) {
                
                  t.t_user = userData.payload.get('userid');
                  t.t_user_pic = userData.payload.get('profile_pic');
                  // Set data for liked
                  this.userActivity.getLikes(t.likeDoc).subscribe(dataLikes => {
                  t.liked = [];
                  
                  dataLikes.forEach(itemsLikes => {
                    var iLike = itemsLikes.payload.doc.data()['user'];
                    if(t.liked.find(f => f == iLike) === undefined) {
                      t.liked.push(iLike);                    
                    }
                    
                  });
                  //Set like or not like
                  t.liked.forEach(users => {
                    likeService.getLoggedU().get().then(user => {
                      user.forEach(u => {
                        
                        if(users === u.id) {
                          t.like = true;
                          
                        }
                        else {
                          t.like = false;
                          
                        }
                      })
                    })
                  })
                  });
                  
                  // console.log(t);
                  this.tweets.push(t);   
                
                
                           
              }
            });
            
          // tweets.forEach(tweet => {            
          //   tweet.liked.forEach(users => {                            
          //     likeService.getLoggedU().get().then(user => {  
          //       user.forEach(u => {
  
          //         if(users === u.id) {
          //           tweet.like = true;
          //           console.log('true',tweet.t_title);
          //         }
          //         else {
          //           tweet.like = false;
          //           console.log('false',tweet.t_title);
          //         }
          //       })
          //     })
          //   })
            
          // })
          });
        });         
        this.showing =true;
        // console.log(this.userActivity.usersTweets);
        // this.tweets = userActivity.usersTweets;           
        
     });
        });
      //   this.users.forEach(i => {          
      //     this.userActivity.getTweets(i);
      //     // console.log(this.userActivity.usersTweets);
      //     this.tweets = userActivity.usersTweets;           
      //     this.showing = this.userActivity.hide; 
      //     this.tweets.forEach(tweet => {            
      //       tweet.liked.forEach(users => {                            
      //         likeService.getLoggedU().get().then(user => {  
      //           user.forEach(u => {

      //             if(users === u.id) {
      //               tweet.like = true;
      //               console.log('true',tweet.t_title);
      //             }
      //             else {
      //               tweet.like = false;
      //               console.log('false',tweet.t_title);
      //             }
      //           })
      //         })
      //       })
            
      //     })
      //  });
      

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
  onUnLike(likeDoc) {
    this.likeService.getLoggedU().get().then(users => {
      users.forEach(user => {
        this.likeService.giveUnLike(likeDoc,user.id);
    })
  })
}

}
