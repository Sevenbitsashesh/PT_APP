import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SocialUser } from '../../components/login/login';
import { MapProvider } from '../../providers/map/map';


@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent implements AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  
  @Input() user: SocialUser;
  @Output() socialToggle = new EventEmitter();
  constructor(private gmapService: MapProvider) {
    console.log(this.user);
    
    
  }
  ngAfterViewInit() {
    
    this.gmapService.loadMap(this.mapElement);
  }
  changeSocial(socialLogin) {
    this.socialToggle.emit(socialLogin);
  }
}
