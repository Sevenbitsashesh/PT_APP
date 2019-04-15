import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController, ActionSheetController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications'
import { ImageProvider } from '../../providers/image/image';


@Injectable()
export class NativeProvider {

  constructor(public http: HttpClient, private toast: ToastController, private notification: LocalNotifications, private platform: Platform, private loading: LoadingController, private actionsheet: ActionSheetController, private imageService: ImageProvider) {
    
  }
  generateToast(msg: string, cssToast: string, pos: string) {
    const toast = this.toast.create({
      duration: 2000,
      position: pos,
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
  // openActionsheet(forThe: string) {
  //   if(forThe === "camera") {
  //    const action = this.actionsheet.create({
  //       title: 'Select Image From',
  //       buttons: [
  //         {
  //           text: 'Select from Gallary',
  //           role: 'destructive',
  //           handler: () => {
  //             this.imageService.selectPhoto().
  //           }
  //         },{
  //           text: 'Capture Image',
  //           handler: () => {
  //             console.log('Archive clicked');
  //           }
  //         }
  //       ]
  //     });
  //     return action.present();
  //   }
    
  // }
}
