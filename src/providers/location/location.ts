import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LatLng, Geocoder } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


@Injectable()
export class LocationProvider {
  geoCoder = new Geocoder();
  constructor(private geoLocation: Geolocation) {
    
    
    
  }
  getCurrentPostion() {
    return this.geoLocation.getCurrentPosition()
  }
  getLoc() {
    this.geoCoder.geocode({})
  }
}
