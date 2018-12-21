import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
  username: string;
  email: string;
  mobile: string;
  address: string;
  dob: string;
  gender: string;
  myForm: FormGroup;
  matching_passwords_group: FormGroup;
  loggedEmail: string;
  profileImg: any;
  validation_messages = {
    'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Cannot be more than 25 characters long.' },
        { type: 'pattern', message: 'Must contain only numbers and letters.' }
      ],
      'mobile': [
        {type: 'required', message: 'Mobile is required.' },
        { type: 'minlength', message: 'Must be at least 10 characters.' },
        { type: 'maxlength', message: 'Cannot be more than 12 characters long.' },
        { type: 'pattern', message: 'Must contain only numbers' }
      ],
      'email': [
        {type: 'required', message: 'Email is required'},
        { type: 'pattern', message: 'Not valid email' }
      ],
      'address': [
        { type: 'pattern', message: 'Maximum 50 Character' }
      ]
    };
    saveProfile() {
      const model = {
        'userid': this.myForm.get('username').value,
        'email': this.myForm.get('email').value,
        'address': this.myForm.get('address').value,
        'mobile': this.myForm.get('mobile').value,
         'gender': this.myForm.get('gender').value,
         'profile_pic': 'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt'
         + '=media&token=04d24821-a4ab-4a03-915c-dd97a6ca2a26',
        'dob': this.myForm.get('dob').value
      };

      this.uactivity.addInfo(model);
    }
  constructor(private formBuilder: FormBuilder, private sharedService: SharedProvider, private uactivity: UseractivityProvider, private camera: Camera) {
    this.loggedEmail = sharedService.getLogged();
    this.profileImg = uactivity.model.profile_pic;
    this.myForm = formBuilder.group({
      username: new FormControl(this.uactivity.model.username, Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])
      ),
      mobile: new FormControl('', Validators.compose([
        Validators.maxLength(12),
        Validators.minLength(10),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.required
      ])
      ),
      email: new FormControl({value: this.loggedEmail, disabled : true}, Validators.compose([
        Validators.required,
        // Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.pattern('^[a-z]{1,100}$')
      ])),
      hobbies: new FormControl('', Validators.compose([
      ])),
      dob: new FormControl('', Validators.compose([
      ])),
      gender: new FormControl('Male', Validators.compose([
      ])),
        }
    );
    
  }


  //* Profile Image  *//
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
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.PNG,
    saveToPhotoAlbum: true,
    allowEdit: true
}).then((imageData) => {

  this.profileImg = imageData;
  this.uactivity.uploadPhoto(imageData);

}, (error) => {

    console.log(error);
});
this.profileImg = this.uactivity.myPhotoURL;
    }
    selectPhoto(): void {
console.log('select photo');

this.camera.getPicture({
  quality: 20,
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  encodingType: this.camera.EncodingType.JPEG || this.camera.EncodingType.PNG,
  mediaType: this.camera.MediaType.PICTURE
}).then((imageData) => {

this.profileImg = imageData;
this.uactivity.uploadPhoto(imageData);

}, (error) => {

  console.log(error);
});
this.profileImg = this.uactivity.myPhotoURL;
    }

}
