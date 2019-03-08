import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Injectable()
export class PassportProvider {

  constructor(public http: HttpClient, private fb: Facebook) {
    
  }
  
  
  }

