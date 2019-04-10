import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataProvider } from '../data/data';

import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';



@Injectable()
export class ImageProvider {
  imageUrl = new BehaviorSubject<any>('');
  uploadedImageObs = this.imageUrl.asObservable();
  progress;
  constructor(public http: HttpClient, private camera: Camera, private dataService: DataProvider, private fstorage: AngularFireStorage) {

  }
  selectPhoto() {
    
    
   return this.camera.getPicture({
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.JPEG || this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    });
    
        }
  capturePhoto() {
    return this.camera.getPicture({
      correctOrientation: true,
      quality: 20,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true,
      allowEdit: true
  })
  }
 
        // Upload Photo to firestorage
  public uploadPhoto(profilepic,location) {
    const file = 'data:image/jpg;base64,' + profilepic;
    const fileRef =  this.fstorage.ref('/'+ location +'/' + this.generateUUID() + '.jpg');
    const stor_task = fileRef.putString(file, 'data_url');
    return stor_task;
    // .percentageChanges().subscribe(d => {
    //   this.progress = d;
    // })
    //  .then(snap => {
    //   this.progress = ((snap.bytesTransferred*100)/snap.totalBytes);
    //   snap.ref.getDownloadURL().then(url => {
    //     console.log(url);
    //     this.imageUrl.next(url);
    //   })
    // }).catch(err => {
    //   console.log('Error',err);
    // })
      
  }
 
  //Generate unique uuid for Image
  private generateUUID(): any {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
}

