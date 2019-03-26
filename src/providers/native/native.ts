import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications'


@Injectable()
export class NativeProvider {

  constructor(public http: HttpClient, private toast: ToastController, private notification: LocalNotifications, private platform: Platform, private loading: LoadingController) {
    
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
  generateNoti(msg) {
    
      this.notification.schedule({
        id: 2,
        text: msg,
        data: {secret: 'mynotification'},
        badge: 2,
        sound: '/assets/media/sms-alert-4-daniel_simon.mp3'

      });    
    
  }
  isApplication() : boolean {
    return this.platform.is('core');
  }
  generateLoad(time) {
    console.log('loading');
    this.loading.create({duration: time,spinner: 'crescent',content: 'Please wait...'}).present();
   

    
    
  }
}
