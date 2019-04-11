import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { UserhomePage } from './userhome';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { UsertabsComponent } from './usertabs'
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { TabHomePageModule } from '../tab-home/tab-home.module';
import { TabSearchPageModule } from '../tab-search/tab-search.module';
import { TabProfilePageModule } from '../tab-profile/tab-profile.module';


import { TabViewsPageModule } from '../tab-views/tab-views.module';
import { TabexercisesPageModule } from '../../pages/tabexercises/tabexercises.module';
import { TabworkoutsPageModule } from '../../pages/tabworkouts/tabworkouts.module';
import { TabmealplansPageModule } from '../../pages/tabmealplans/tabmealplans.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabschedulePageModule } from '../../pages/tabschedule/tabschedule.module';




@NgModule({
  declarations: [
    UserhomePage,
    UsertabsComponent
  ],
  imports: [
    IonicModule,
    // IonicPageModule.forChild(UserhomePage),
    CommonModule,
    // IonicModule.forRoot(UsertabsComponent),
    UserRoutingModule,
    ComponentsModule,
    TabHomePageModule,
    TabSearchPageModule,
    TabProfilePageModule,
    TabViewsPageModule,
    TabexercisesPageModule,
    TabworkoutsPageModule,
    TabmealplansPageModule,
    TabschedulePageModule
  ],
  bootstrap: [],
  entryComponents: [ ],
  exports: [ ],
  providers: []
})
export class UserhomePageModule { }
