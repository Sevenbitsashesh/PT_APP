import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { SocialUser } from '../../components/login/login';
import { MapProvider } from '../../providers/map/map';
import { LatLng } from '@ionic-native/google-maps';


@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent implements AfterViewInit,AfterContentInit  {
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
  ngAfterContentInit() {    
    // this.gmapService.getCurrentPosition().then(pos => {        
    //   let currentLoc = new LatLng(pos.coords.latitude,pos.coords.longitude);      
    //   this.gmapService.moveCamera(currentLoc);
    // })
  }
}
