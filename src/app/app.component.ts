import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
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
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private route: Router) {
    AngularFireModule.initializeApp(config);
    console.log('main comp');
    route.navigate(['/home']);
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

