import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
// import { GoogleMap, LocationService, MyLocation, LatLng, GoogleMaps, GoogleMapsEvent, Marker, MarkerOptions, GoogleMapOptions} from '@ionic-native/google-maps';
@Injectable()
export class MapProvider {
  @ViewChild('map') element;
  // map: GoogleMap;
  constructor(public http: HttpClient) {
    // let options: GoogleMapOptions = {
    //     compass: true,
    //     myLocation: true,
    //     myLocationButton: true,
    //     mapToolbar: true
    // };
    // this.map =  gmaps.create('google-map-view-main',options);
  }

}
