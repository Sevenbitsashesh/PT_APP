import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';

import { UserProvider } from '../../providers/user/user';
import { AuthProvider, UserDetails } from '../../providers/auth/auth';


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
  // userid: string;
  // username: string;
  // email: string;
  // mobile: string;
  // address: string;
  // dob: string;
  // gender: string;  
  // loggedEmail: string;
  // profileImg: any;
  // tweets: TweetModel[];
  // bio: string;
  // bioLength;
  userModel: UserDetails;
  myForm: FormGroup;
  
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
      // this.userModel.userid = this.myForm.get('username').value;
      const model = {
        'userid': this.myForm.get('username').value,
        'email': this.myForm.get('email').value,
        'address': this.myForm.get('address').value,
        'mobile': this.myForm.get('mobile').value,
         'gender': this.myForm.get('gender').value,        
        'dob': this.myForm.get('dob').value
      };

      // this.uactivity.addInfo(model);
    }
  
  constructor(private formBuilder: FormBuilder, private imageService: ImageProvider, private dataService: DataProvider,private authService: AuthProvider, private userService: UserProvider) {
    authService.currentUserSubject.subscribe(user => {
      this.userModel = user;
    //   console.log(this.userModel.exp);
      



      // this.loggedEmail = this.userModel.email;
    // this.profileImg = this.userModel.profile_pic;
    // this.bio = this.userModel.bio;
    this.myForm = formBuilder.group({
      username: new FormControl('', Validators.compose([
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
      email: new FormControl({value: '', disabled : true}, Validators.compose([
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
      gender: new FormControl('', Validators.compose([
      ]))
        }
    );
    });
    
    
   
    // console.log(this.userModel.bio);
  }
  changeBio(bioText: string) {
    // this.uactivity.saveBio(bioText);    
  }
  

  //* Profile Image  *//
  actionForProfile() {
    // this.sharedService.present([
    //   {
    //     text: 'Camera',
    //     handler: () => {
    //       // this.captureImage();
    //     }
    //   },
    //   {
    //     text: 'Choose from gallery',
    //     handler: () => {
    //       // this.selectPhoto();
    //     }
    //   },
    // ]);
    }
  //   captureImage() {
  //  console.log('capture photo');

  //  this.imageService.capturePhoto().then((imageData) => {

  //             this.profileImg = imageData;
  //             // this.uactivity.uploadPhoto(imageData);
  //             this.imageService.uploadPhoto(imageData,'profile');
  //             this.dataService.imageUrlObs.subscribe(url => {
  //               if(url) {
  //                 this.uactivity.saveprofilePic(url);
  //               }
  //             })
  //           }, (error) => {

  //               console.log(error);
  //           });
  //           this.profileImg = this.uactivity.myPhotoURL;
  //   }
  //   selectPhoto(): void {
  //       console.log('select photo');
  //     this.imageService.selectPhoto().then((imageData) => {
  //       this.profileImg = imageData;
          
  //       this.imageService.uploadPhoto(imageData,'profile'); 
  //           this.dataService.imageUrlObs.subscribe(url => {
  //             if(url) {
  //               this.uactivity.saveprofilePic(url);
  //             }
  //           })
  //       }, (error) => {        
  //         console.log(error);
  //       });
  //       this.profileImg = this.uactivity.myPhotoURL;
  //   }    
    
}
