import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef} from '@angular/core';
import { GoogleMap, LocationService, MyLocation, LatLng, GoogleMaps, GoogleMapsEvent, Marker, MarkerOptions, GoogleMapOptions, CameraPosition, Geocoder} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


@Injectable()
export class MapProvider {
  currentLoc: LatLng;
  map: GoogleMap;
  geoLoc;
  constructor(public http: HttpClient, private geoLocation: Geolocation) {
    
    
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
  getCurrentPosition() {
    return this.geoLocation.getCurrentPosition({enableHighAccuracy: true});
  }
  moveCamera(latlng: LatLng) {
    
      let campos: CameraPosition<any> = {
        target: latlng,
        zoom: 10,
        tilt: 10,
        duration: 10000
      }
    return  this.map.moveCamera(campos);
  }

}
