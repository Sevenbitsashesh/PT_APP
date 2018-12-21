import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'profilepic',
  templateUrl: 'profilepic.html'
})
export class ProfilepicComponent {
  profileImg: string;
  

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
    // destinationType: this.camera.DestinationType.NATIVE_URI,
    targetWidth: 320,
    targetHeight: 320,
quality: 100,
sourceType: this.camera.PictureSourceType.CAMERA
}).then((data) => {

    this.profileImg = "data:image/jpeg;base64," + data;

}, (error) => {

    console.log(error);
});
    }
    selectPhoto(): void {
console.log('select photo');
    }
}
