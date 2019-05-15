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
import { NewclientComponent } from './newclient/newclient';
import { TrainerhomeComponent } from './trainerhome/trainerhome';
import { NewworkoutComponent } from './newworkout/newworkout';
import { NewmealplansComponent } from './newmealplans/newmealplans';
import { DropdownComponent } from './dropdown/dropdown';
import { StepperComponent } from './stepper/stepper';
import { MatStepperModule, MatFormFieldModule, MatSidenavModule, MatTabsModule, MatFormFieldControl, MatInputModule, MatExpansionModule, MatChipsModule, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListworkoutsComponent } from './listworkouts/listworkouts';
import { ListverticalComponent } from './listvertical/listvertical';
import { StretchComponent } from './stretch/stretch';
import { NewexerciseComponent } from './newexercise/newexercise';
import { ExeSetsComponent } from './exe-sets/exe-sets';
import { WorkoutdetailsComponent } from './workoutdetails/workoutdetails';
import { ViewscheduleComponent } from './viewschedule/viewschedule';

import { BrowserModule } from '@angular/platform-browser';


import { PaymentComponent } from './payment/payment';
import { MyclientsComponent } from './myclients/myclients';
import { ClientdetailsComponent } from './clientdetails/clientdetails';
import { MealplanslistComponent } from './mealplanslist/mealplanslist';
import { DaypplansComponent } from './daypplans/daypplans';
import { CustomMatPaginatorIntl } from '../providers/custom.paginator';
import { ScheduleassessComponent } from './scheduleassess/scheduleassess';
import { ExeSelectionComponent } from './exe-selection/exe-selection';
import { SelectclientComponent } from './selectclient/selectclient';
import { MuscleSlectionComponent } from './muscle-slection/muscle-slection';








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
    NewclientComponent,
    TrainerhomeComponent,
    NewworkoutComponent,
    NewmealplansComponent,
    DropdownComponent,
    StepperComponent,
    ListworkoutsComponent,
    ListverticalComponent,
    StretchComponent,
    NewexerciseComponent,
    ExeSetsComponent,
    WorkoutdetailsComponent,
    ViewscheduleComponent,
    
    
    PaymentComponent,
    MyclientsComponent,
    ClientdetailsComponent,
    MealplanslistComponent,
    DaypplansComponent,
    ScheduleassessComponent,
    ExeSelectionComponent,
    SelectclientComponent,
    MuscleSlectionComponent,

    
        ],
	imports: [ IonicModule, CommonModule, RouterModule, VerificationPageModule, MatStepperModule, MatInputModule, MatTabsModule, MatFormFieldModule, MatExpansionModule, MatChipsModule, MatPaginatorModule, CdkStepperModule	],	exports: [FirstComponent,
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
    NewclientComponent,
    TrainerhomeComponent,
    NewworkoutComponent,
    NewmealplansComponent,
    DropdownComponent,
    StepperComponent,
    ListworkoutsComponent,
    ListverticalComponent,
    StretchComponent,
    NewexerciseComponent,
    ExeSetsComponent,
    WorkoutdetailsComponent,
    ViewscheduleComponent,
    
        
    PaymentComponent,
    MyclientsComponent,
    ClientdetailsComponent,
    MealplanslistComponent,
    DaypplansComponent,
    ScheduleassessComponent,
    ExeSelectionComponent,
    SelectclientComponent,
    MuscleSlectionComponent,


],
    entryComponents: [LoginComponent, FirstComponent, ProfileComponent, ExeSetsComponent, PaymentComponent, ScheduleassessComponent, ExeSelectionComponent, SelectclientComponent, MuscleSlectionComponent],
    providers: [
        {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
    ]
    
})
export class ComponentsModule {}
