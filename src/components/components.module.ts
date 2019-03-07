import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
import { HometabComponent } from './hometab/hometab';
import { ProfileComponent } from './profile/profile';
import { ProfilepicComponent } from './profilepic/profilepic';
import { UserprofileComponent } from './userprofile/userprofile';
import { NotificationComponent } from './notification/notification';
import { SettingComponent } from './setting/setting';
import { SigninComponent } from './signin/signin';
import { SignupComponent } from './signup/signup';
import { FeedsComponent } from './feeds/feeds';
import { LoaderComponent } from './loader/loader';
import { VerificationPageModule } from '../pages/verification/verification.module';
import { VerificationPage } from '../pages/verification/verification';
import { SidemenuComponent } from './sidemenu/sidemenu';






@NgModule({
	declarations: [FirstComponent,
    LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent,
    SettingComponent,
    SigninComponent,
    SignupComponent,
    FeedsComponent,
    LoaderComponent, VerificationPage,
    SidemenuComponent],
	imports: [ IonicModule, CommonModule, RouterModule, VerificationPageModule	],
	exports: [FirstComponent,
	LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent,
    SettingComponent,
    SigninComponent,
    SignupComponent,
    FeedsComponent,
    LoaderComponent,
    SidemenuComponent],
    entryComponents: [LoginComponent, FirstComponent, ProfileComponent],
    
})
export class ComponentsModule {}
