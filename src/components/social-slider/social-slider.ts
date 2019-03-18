import { Component, Input } from '@angular/core';
import { } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image/image';
import { SocialUser } from '../../components/login/login';



@Component({
  selector: 'social-slider',
  templateUrl: 'social-slider.html'
})
export class SocialSliderComponent {
  @Input() user: SocialUser;
  slides: number =1;
  // profil_image = "../../assets/icon/friends.svg";
  progress;
  constructor(private imageService: ImageProvider) {
    // this.progress = imageService.progress;
  }
  nextSlide() {
    if(this.slides !== 3) {
      this.slides = this.slides + 1;
    }
    else {
      this.slides = 1;
    }
    
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
}
