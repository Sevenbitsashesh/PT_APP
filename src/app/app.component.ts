import { Component, OnInit, OnChanges } from '@angular/core';
import { Platform, LoadingController, Nav, NavController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {  AngularFireModule } from 'angularfire2/';
import { config } from '../Configs/firebase_config';
import { HomePage } from '../pages/home/home';
import { Router } from '@angular/router'; 
@Component({
  selector: 'ion-app',
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private route: Router, private loadingController: LoadingController, private app: IonicApp) {
    // AngularFireModule.initializeApp(config);
    const overlay = this.app._overlayPortal.getActive();
    const nav = this.app._getActivePortal();
	const closeDelay = 2000;
	const spamDelay = 500;
    platform.registerBackButtonAction(() => {
      // window.history.back();
      console.log(app._componentName);
        if(this.nav.getActive().component) {
          platform.exitApp();
        }
        else {
          
        }
        
      
    })
    
    // console.log('main comp');
    AngularFireModule.initializeApp(config);
    this.route.navigate(['/home']);
    platform.ready().then(() => {
      statusBar.show();
       statusBar.backgroundColorByHexString('#2abb9c');
      splashScreen.hide();
      // loadingController.create({content: 'name',duration: 2000,}).present()
    });
  }
  
  
}

