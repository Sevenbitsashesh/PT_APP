import { Component } from '@angular/core';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'create-tweet',
  templateUrl: 'create-tweet.html'
})
export class CreateTweetComponent {

  tweetcontent;
  t_title;
  imageUrl;
  constructor(private userActivity: UseractivityProvider, private imageService: ImageProvider, private dataService: DataProvider) {
    
  }
  createTweet() {
    if(this.imageUrl) {
      this.imageService.uploadPhoto(this.imageUrl,'tweets');
      this.dataService.imageUrlObs.subscribe(url => {
        if(url) {
          console.log('my tweet url',url);
          this.userActivity.createTweet(this.tweetcontent,this.t_title,url);      
        }
      })
    }
    
  }
  select() {
    this.imageService.selectPhoto().then((imageData) => {
      this.imageUrl = imageData;
      console.log('image selected');
      
      }, (error) => {        
        console.log(error);
      });
   
  }
  
}
