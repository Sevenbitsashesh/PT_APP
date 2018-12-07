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
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
//  {path: 'home', component: HomePage },
// {path: 'create', component: CreateComponent},
// { path: 'usertabs', loadChildren: './home/usertabs/usertabs.module#UsertabsPageModule'},
 { path: 'first', component: FirstComponent    },
 { path: 'home', pathMatch: 'full', component: HomePage},
 { path: '', pathMatch: 'full', component: LoginComponent},
 { path: '**', component: HomePage}
  ];
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
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider
  ]
})
export class AppModule {}
