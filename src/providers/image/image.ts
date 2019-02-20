import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Observable } from 'rxjs';
import { DataProvider } from '../data/data';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';



@Injectable()
export class ImageProvider {
  imageUrl;
  
  constructor(public http: HttpClient, private camera: Camera, private dataService: DataProvider, private fstorage: AngularFireStorage) {
      
  }
  selectPhoto() {
    
    
   return this.camera.getPicture({
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.JPEG || this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    });
    
        }
  capturePhoto() {
    return this.camera.getPicture({
      correctOrientation: true,
      quality: 30,
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

    stor_task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL()
        .subscribe(url => {
          if (url) {
        // this.dataService.changeImageData(url);
        
          }
        });
      }
      )
    ).subscribe();
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

