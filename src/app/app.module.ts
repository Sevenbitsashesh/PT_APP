import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavControllerBase } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SharedProvider } from '../providers/shared/shared';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from '../components/login/login';
import { RouterModule, Routes, RouterOutlet, RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from '../components/first/first';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from '../pages/userhome/user.routing';
import { UserhomePageModule } from '../pages/userhome/userhome.module';
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { config } from '../Configs/firebase_config';
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
    RouterModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
