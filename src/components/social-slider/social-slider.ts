import { Component, Input, EventEmitter, Output } from '@angular/core';
import { } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image/image';
import { SocialUser } from '../../components/login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  

  constructor(private imageService: ImageProvider, private formBuilder: FormBuilder) {
      // this.mySocialForm = formBuilder.group({
      //       firstname: Validators.required()
      // })
  }
  onProfileImage() {
    this.imageService.selectPhoto().then(image => {    
      this.imageService.uploadPhoto(image,'swaProfile');
      // this.imageService.uploadedImageObs.subscribe(imageUrl => {
      //   this.profil_image = imageUrl;
      //   this.progress = this.imageService.progress;
      // });
    })
  }
  getBack() {
    this.socialToggle.emit(false);
  }
}
