import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { AngularFireMessaging } from 'angularfire2/messaging';
@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {
  mobile: string;
  constructor(private router: Router, private fireMessaging: AngularFireMessaging) {
     
  }
  sendOtp() {
    
    if(this.checkMobile()) {
    
    }
    
  }
  checkMobile() {
    const pattern = /^(0|[1-9][0-9]*)$/;
    console.log('checking mo:',this.mobile);
      // if(this.mobile.match('^(0|[1-9][0-9]*)$')) {
        if(this.mobile.match(pattern)) {
        return true;  
      }
      console.log('click');
      return false;
  }
  checkEmail() {
    
    
    if(this.mobile.match('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')) {
      return true;
    }
    return false;
}
  
}
