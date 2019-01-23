import { Component } from '@angular/core';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageProvider } from '../../providers/storage/storage';
import { AngularFireUploadTask } from 'angularfire2/storage';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'create-tweet',
  templateUrl: 'create-tweet.html'
})
export class CreateTweetComponent {

  tweetcontent;
  t_title;
  imageUrl;
  progress;
  uploadTask: AngularFireUploadTask;
  constructor(private userActivity: UseractivityProvider, private imageService: ImageProvider, private dataService: DataProvider, private storeService: StorageProvider) {
    
  }
  // createTweet() {
  //   console.log('click')
  //   if(this.imageUrl) {
  //     this.imageService.uploadPhoto(this.imageUrl,'tweets');
  //     console.log('click')
  //     this.dataService.imageUrlObs.subscribe(url => {
  //       if(url) {
  //         // console.log('my tweet url',url);
  //         this.userActivity.createTweet(this.tweetcontent,this.t_title,url);      
  //       }
        
  //     })
  //   }
  //   else {
  //     this.userActivity.createTweet(this.tweetcontent,this.t_title,'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/tweets%2Ftwitter_cover.jpg?alt=media&token=c8814650-1412-4a4f-9266-cfe3d11d9b9a');      
  //   }
  // }
  // Create tweet document 
  createTweet() {
    
   
      this.dataService.imageUrlObs.subscribe(url => {
        if(url) {
          // console.log('my tweet url',url);
          this.userActivity.createTweet(this.tweetcontent,this.t_title,url);      
        }
        else {
          this.userActivity.createTweet(this.tweetcontent,this.t_title,'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/tweets%2Ftwitter_cover.jpg?alt=media&token=c8814650-1412-4a4f-9266-cfe3d11d9b9a');      
        }
        
      })
    
   
  }
  //select photo for upload
  select() {
    this.imageService.selectPhoto().then((imageData) => {
      this.uploadTask = this.storeService.uploadPhoto(imageData,'tweets')
      this.uploadTask.percentageChanges().subscribe(prog => {
        
        this.progress = prog;
      });          
      console.log('image selected');      
      }, (error) => {        
        console.log(error);
      });   
  }
  cancelUpload() {
    this.uploadTask.task.cancel();
  }
  
  
}
