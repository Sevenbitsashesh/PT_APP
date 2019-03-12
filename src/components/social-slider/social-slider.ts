import { Component } from '@angular/core';



@Component({
  selector: 'social-slider',
  templateUrl: 'social-slider.html'
})
export class SocialSliderComponent {
  slides: number =1;
  constructor() {

  }
  nextSlide() {
    if(this.slides !== 3) {
      this.slides = this.slides + 1;
    }
    else {
      this.slides = 1;
    }
    
  }
}
