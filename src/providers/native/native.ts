import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class NativeProvider {

  constructor(public http: HttpClient, private toast: ToastController) {
    
  }
  generateToast(msg: string, cssToast: string) {
    const toast = this.toast.create({
      duration: 2000,
      position: 'bottom',
      cssClass: cssToast,
      message: msg,
      closeButtonText: 'Close',
      
    });
    toast.present();
  }

}
