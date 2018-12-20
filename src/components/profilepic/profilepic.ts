import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'profilepic',
  templateUrl: 'profilepic.html'
})
export class ProfilepicComponent {

  

  constructor(private sharedService: SharedProvider, private camera: Camera) {
       
  }
   actionForProfile() {
    this.sharedService.present([
      {
        text: 'Camera',
        handler: () => {
          this.captureImage()
        }
      },
      {
        text: 'Choose from gallery',
        handler: () => {
          this.selectPhoto();
        }
      },
    ]);
    
    }
    captureImage() {
  //  console.log('capture photo');


  this.camera.getPicture({
    // sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  }).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
  //  this.profileImg = this.uactivity.myPhoto;
    }
    selectPhoto(): void {
console.log('select photo');
    }
}
