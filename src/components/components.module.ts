import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first';
import { LoginComponent } from './login/login';
import { IonicModule, IonicPageModule } from 'ionic-angular';
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
import { SocialLoginComponent } from './social-login/social-login';
import { SocialSliderComponent } from './social-slider/social-slider';
import { SchedulesComponent } from './schedules/schedules';
import { NewclientComponent } from './newclient/newclient';
import { TrainerhomeComponent } from './trainerhome/trainerhome';
import { NewworkoutComponent } from './newworkout/newworkout';
import { NewmealplansComponent } from './newmealplans/newmealplans';
import { DropdownComponent } from './dropdown/dropdown';
import { StepperComponent } from './stepper/stepper';
import { MatStepperModule, MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListworkoutsComponent } from './listworkouts/listworkouts';
import { ListverticalComponent } from './listvertical/listvertical';
import { StretchComponent } from './stretch/stretch';
import { NewexerciseComponent } from './newexercise/newexercise';





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
    SidemenuComponent,
    SocialLoginComponent,
    SocialSliderComponent,
    SchedulesComponent,
    NewclientComponent,
    TrainerhomeComponent,
    NewworkoutComponent,
    NewmealplansComponent,
    DropdownComponent,
    StepperComponent,
    ListworkoutsComponent,
    ListverticalComponent,
    StretchComponent,
    NewexerciseComponent    ],
	imports: [ IonicModule, CommonModule, RouterModule, VerificationPageModule, MatStepperModule, MatFormFieldModule	],
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
    SidemenuComponent,
    SocialLoginComponent,
    SocialSliderComponent,
    SchedulesComponent,
    NewclientComponent,
    TrainerhomeComponent,
    NewworkoutComponent,
    NewmealplansComponent,
    DropdownComponent,
    StepperComponent,
    ListworkoutsComponent,
    ListverticalComponent,
    StretchComponent,
    NewexerciseComponent],
    entryComponents: [LoginComponent, FirstComponent, ProfileComponent],
    
})
export class ComponentsModule {}
