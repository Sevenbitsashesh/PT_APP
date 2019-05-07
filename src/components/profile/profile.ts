import { Component, ChangeDetectorRef, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedProvider } from '../../providers/shared/shared';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';

import { UserProvider } from '../../providers/user/user';
import { AuthProvider, UserDetails } from '../../providers/auth/auth';
import { UserInfo } from '../../Models/users_info';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';
import { NativeProvider } from '../../providers/native/native';


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent{
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
  userModel: UserInfo;
  myForm: FormGroup;
  userDetail: UserDetails;
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
        'user_name': this.myForm.get('username').value,
        'address': this.myForm.get('address').value,
        'mobile': this.myForm.get('mobile').value,
        //  'gender': this.myForm.get('gender').value,        
        'dob': this.myForm.get('dob').value,
        'id': this.userModel.id
      };
      console.log(model);
      this.userService.updateProfile(model,this.authService.currentUserValue).subscribe(dataProfile => {
        if(dataProfile) {
          this.nativeService.generateToast('Profile Updated','','bottom');
        }
      })

    }
  
  constructor(private formBuilder: FormBuilder, private imageService: ImageProvider, private dataService: DataProvider,private authService: AuthProvider, private userService: UserProvider, private cd: ChangeDetectorRef, private modal: ModalController, private actionsheet: ActionSheetController, private nativeService: NativeProvider) {
    // document.addEventListener('touchstart', this.handler, {capture: true});

    this.userModel =  dataService.u;
    console.log(dataService.u)
   
    this.myForm = formBuilder.group({
      username: new FormControl(this.userModel.user_name, Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])
      ),
      mobile: new FormControl(this.userModel.mobile, Validators.compose([
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
      address: new FormControl(this.userModel.address, Validators.compose([
        Validators.pattern('^[a-z]{1,100}$')
      ])),
      hobbies: new FormControl('', Validators.compose([
      ])),
      dob: new FormControl(this.userModel.dob, Validators.compose([
      ])),
      gender: new FormControl('', Validators.compose([
      ]))
        }
    );

  }
  changeBio(bioText: string) {
    // this.uactivity.saveBio(bioText);    
  }
  

  //* Profile Image  *//
  actionForProfile(forThe) {
    
    
      const action = this.actionsheet.create({
         title: 'Select Image From',
         buttons: [
           {
             text: 'Select from Gallary',
             role: 'destructive',
             handler: () => {
               this.imageService.selectPhoto().then(data => {
                 console.log(data);
                 this.imageService.uploadPhoto(data,'exercise').
                 then(snap => {
                   const progress = ((snap.bytesTransferred*100)/snap.totalBytes);
                   snap.ref.getDownloadURL().then(url => {
                     this.userModel.profile_pic = url;
                     console.log(url);
                     // this.imageUrl.next(url);
                   })
                 }).catch(err => {
                   console.log('Error',err);
                 })
                 
               })
             }
           },{
             text: 'Capture Image',
             handler: () => {
               this.imageService.capturePhoto().then(data => {
                 this.imageService.uploadPhoto(data,'exercise').
                 then(snap => {
                   const progress = ((snap.bytesTransferred*100)/snap.totalBytes);
                   snap.ref.getDownloadURL().then(url => {
                    this.userModel.profile_pic = url;
                     console.log(url);
                     // this.imageUrl.next(url);
                   })
                 }).catch(err => {
                   console.log('Error',err);
                 })
               })
             }
           }
         ]
       });
       return action.present();
     
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
  segmentChange() {
    console.log('segment changed');
      this.cd.detectChanges();      
    }
   
}
