import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap, LocationService, MyLocation, LatLng, GoogleMaps, GoogleMapsEvent, Marker, MarkerOptions, GoogleMapOptions, CameraPosition} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { CameraOptions } from '@ionic-native/camera';
@Injectable()
export class MapProvider {
  currentLoc: LatLng;
  map: GoogleMap;
  constructor(public http: HttpClient, private gmaps: GoogleMaps, private geoLocation: Geolocation) {
    this.getCurrentPostion().then(location => {
      this.currentLoc = new LatLng(location.coords.latitude,location.coords.longitude);
      this.moveCamera(this.currentLoc);
      console.log('Current Longitude',location.coords.longitude);
      console.log('Current Latitude',location.coords.latitude);
    })
  }
  loadMap(mapElement: ElementRef) {
    
    let element = mapElement.nativeElement;
    let options: GoogleMapOptions = {
      compass: true,
      myLocation: true,
      myLocationButton: true,
      mapToolbar: true,
      controls: {
        zoom: true,
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true,
        indoorPicker: true
      },
      gestures: {
          zoom: true,
          rotate: true,
          scroll: true,
          tilt: true
      }
      
  };
  this.map =  GoogleMaps.create(element, options);
  }
  getCurrentPostion() {
    return this.geoLocation.getCurrentPosition();
  }
  moveCamera(latlng: LatLng) {
      let campos: CameraPosition<any> = {
        target: latlng,
        zoom: 10,
        tilt: 10,
        duration: 10000
      }
      this.map.moveCamera(campos);
  }
  zoomIn() {

  }
  zoomOut() {

  }
}
