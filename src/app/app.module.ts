import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavControllerBase } from 'ionic-angular';
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
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { config } from '../Configs/firebase_config';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataProvider } from '../providers/data/data';
import { AngularFireMessagingModule } from 'angularfire2/messaging';
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    RouterModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireMessagingModule
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
    AngularFireAuth,
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
    TweetProvider
  ]
})
export class AppModule {}
