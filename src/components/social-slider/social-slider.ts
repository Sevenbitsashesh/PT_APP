import { Component, Input, EventEmitter, Output } from '@angular/core';
import { } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image/image';
import { SocialUser } from '../../components/login/login';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { existingUsernameValidator } from '../../directives/existing-userid-validator/existing-userid-validator';

@Component({
  selector: 'social-slider',
  templateUrl: 'social-slider.html'
})
export class SocialSliderComponent {
  @Input() user: SocialUser;
  
  slides: number =1;  
  progress;
  mySocialForm: FormGroup;
  @Output() socialToggle = new EventEmitter();  

  constructor(private imageService: ImageProvider, private formBuilder: FormBuilder, private authService: AuthProvider, private userService: UserProvider) {
      this.mySocialForm = formBuilder.group({
        username: new FormControl('', Validators.compose([
          Validators.maxLength(25),
            Validators.minLength(5),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            Validators.required,            
        ]
        ),existingUsernameValidator(this.userService)),
        birthday: new FormControl('', Validators.compose([
        ]))
      })      
      // console.log(this.user);
  }
  onProfileImage() {
    this.imageService.selectPhoto().then(image => {    
      this.imageService.uploadPhoto(image,'swaProfile');
      this.imageService.uploadedImageObs.subscribe(imageUrl => {
        console.log(this.user);
        this.user.profile_pic = imageUrl;        
        this.progress = this.imageService.progress;
      });
    })
  }
  getBack() {
    this.socialToggle.emit(false);
  }
  createSocial() {
      this.authService.signupSocial(this.user).subscribe(res => {
        console.log(res);
         this.user.username = this.mySocialForm.get('username').value;
         
      })
  }
}
