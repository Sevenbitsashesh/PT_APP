import { Component } from '@angular/core';

import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageProvider } from '../../providers/storage/storage';
import { AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'create-tweet',
  templateUrl: 'create-tweet.html'
})
export class CreateTweetComponent {

  tweetcontent;
  t_title;
  imageUrl;
  progress: number;
  uploadTask: AngularFireUploadTask;
  constructor(private imageService: ImageProvider, private dataService: DataProvider, private storeService: StorageProvider) {
    
  }
  getUrl() {
    return this.dataService.imageUrlObs;
  }
  // Create tweet document 
  createTweet() {
      
        if(this.imageUrl) {
          console.log('my tweet url',this.imageUrl);
          // this.userActivity.createTweet(this.tweetcontent,this.t_title,this.imageUrl).then(promise => {
                      
          // });
        }
        else {
          // this.userActivity.createTweet(this.tweetcontent,this.t_title,'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/tweets%2Ftwitter_cover.jpg?alt=media&token=c8814650-1412-4a4f-9266-cfe3d11d9b9a');      
        }

  }
  //select photo for upload
  select() {
    this.imageService.selectPhoto().then((imageData) => {
      this.uploadTask = this.storeService.uploadPhoto(imageData,'tweets');
      // this.getProgress();
      this.uploadTask.snapshotChanges().subscribe(prog => {

        this.progress = Math.round(prog.bytesTransferred * 100 / (prog.totalBytes));
        this.progress.toFixed(0);
        prog.task.then(complete => {
          complete.ref.getDownloadURL().then(img => {
            this.imageUrl =img;
          })
        })
      })
      }, (error) => {        
        console.log(error);
      });
      
  }
  cancelUpload() {
    this.uploadTask.task.cancel();
    this.progress = 100;
  }
  getProgress() {
    this.uploadTask.percentageChanges().subscribe(prog => {        
      this.progress = prog.valueOf();
          
    });          
  }
  deleteImage() {
      this.storeService.deleteFile(this.imageUrl);
  }
}
