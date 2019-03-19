import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocialUser } from '../../components/login/login';


@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent {
  @Input() user: SocialUser;
  @Output() socialToggle = new EventEmitter();
  constructor() {
    console.log(this.user);
  }
  changeSocial(socialLogin) {
    this.socialToggle.emit(socialLogin);
  }
}
