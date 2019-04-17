import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { UserhomePage } from './userhome';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { UsertabsComponent } from './usertabs'
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { TabHomePageModule } from '../clienttabs/tab-home/tab-home.module';
import { TabSearchPageModule } from '../clienttabs/tab-search/tab-search.module';
import { TabProfilePageModule } from '../trainertabs/tab-profile/tab-profile.module';


import { TabViewsPageModule } from '../clienttabs/tab-views/tab-views.module';
import { TabexercisesPageModule } from '../../pages/trainertabs/tabexercises/tabexercises.module';
import { TabworkoutsPageModule } from '../../pages/trainertabs/tabworkouts/tabworkouts.module';
import { TabmealplansPageModule } from '../../pages/trainertabs/tabmealplans/tabmealplans.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabschedulePageModule } from '../../pages/trainertabs/tabschedule/tabschedule.module';
import { TrainertabsComponent } from './trainertabs';
import { TrainerTab } from '../../components/trainertab/trainertab';
import { ClienttabsComponenet } from './clienttabs';
import { ClientTab } from '../../components/clienttab/clienttab';




@NgModule({
  declarations: [
    UserhomePage,
    TrainertabsComponent,
    TrainerTab,
    ClienttabsComponenet,
    ClientTab
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
    TabschedulePageModule,
    
    
  ],
  bootstrap: [],
  entryComponents: [ ],
  exports: [ ],
  providers: []
})
export class UserhomePageModule { }
