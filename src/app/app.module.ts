import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavControllerBase, LoadingController, Nav, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SharedProvider } from '../providers/shared/shared';
import { ComponentsModule } from '../components/components.module';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from '../pages/userhome/user.routing';
import { UserhomePageModule } from '../pages/userhome/userhome.module';


import { config } from '../Configs/firebase_config';


import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

import { DataProvider } from '../providers/data/data';

import { RequestProvider } from '../providers/request/request';
import { ImageProvider } from '../providers/image/image';
import { TweetsProvider } from '../providers/tweets/tweets';
import { LoginProvider } from '../providers/login/login';

import { RefProvider } from '../providers/ref/ref';
import { AuthProvider } from '../providers/auth/auth';
import { StorageProvider } from '../providers/storage/storage';
import { UserProvider } from '../providers/user/user';
import { AuthguardProvider } from '../providers/authguard/authguard';
import { TweetProvider } from '../providers/tweet/tweet';
import { NativeProvider } from '../providers/native/native';
import { LocalNotifications } from '@ionic-native/local-notifications/index';
import { PassportProvider } from '../providers/passport/passport';
import { Facebook } from '@ionic-native/facebook';
import { AdMobFree } from '@ionic-native/admob-free';
import { MapProvider } from '../providers/map/map';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationProvider } from '../providers/location/location';
import { ExerciseProvider } from '../providers/exercise/exercise';
import { WorkoutProvider } from '../providers/workout/workout';
import { MealProvider } from '../providers/meal/meal';
import { ClientProvider } from '../providers/client/client';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    UserRoutingModule,
    UserhomePageModule,
    AngularFireModule.initializeApp(config),
    RouterModule,
    FormsModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
  // AnimationModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider,
    // AngularFireAuth,
    DataProvider,
    RequestProvider,
    ImageProvider,
    TweetsProvider,
    LoginProvider,
    RefProvider,
    AuthProvider,
    StorageProvider,
    UserProvider,
    AuthguardProvider,
    TweetProvider,
    NativeProvider,
    LocalNotifications,
    PassportProvider,
    Facebook,
    AdMobFree,
    MapProvider,
    GoogleMaps,
    Geolocation,
    LocationProvider,
    LoadingController,
    ExerciseProvider,
    WorkoutProvider,
    MealProvider,
    ClientProvider,
    // AnimationProvider
  ]
  
})
export class AppModule {}
