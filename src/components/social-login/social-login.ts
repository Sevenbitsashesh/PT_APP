import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { SocialUser } from '../../components/login/login';
import { MapProvider } from '../../providers/map/map';
import { LatLng, GoogleMap, GoogleMaps } from '@ionic-native/google-maps';
import { LocationProvider } from '../../providers/location/location';


@Component({
  selector: 'social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginComponent implements AfterViewInit,AfterContentInit  {
  @ViewChild('map') mapElement: ElementRef;
  @Input() user: SocialUser;
  @Output() socialToggle = new EventEmitter();
  myLoc;
  constructor(private gmapService: MapProvider, private locationService: LocationProvider) {
    console.log(this.user);

  }
  ngAfterViewInit() {
    // this.gmapService.loadMap(this.mapElement);
  }
  changeSocial(socialLogin) {
    this.socialToggle.emit(socialLogin);
  }
  ionViewWillEnter() {
    
  }
  ngAfterContentInit() {    
    this.locationService.getCurrentPostion()
    .then(pos => {        
      let currentLoc = new LatLng(pos.coords.latitude,pos.coords.longitude);      
      this.gmapService.moveCamera(currentLoc);
      this.gmapService.getLocation().then(myLoc => {
        console.log(myLoc);
        this.myLoc = myLoc[0]['extra']['lines'];
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
}
