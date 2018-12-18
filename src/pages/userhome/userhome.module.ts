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

@NgModule({
  declarations: [
    UserhomePage,
    UsertabsComponent
  ],
  imports: [
    // IonicPageModule.forChild(UserhomePage),
    CommonModule,
    IonicModule.forRoot(UsertabsComponent),
    UserRoutingModule,
    ComponentsModule,
    TabHomePageModule,
    TabSearchPageModule
  ],
  bootstrap: [],
  entryComponents: [],
  exports: []
})
export class UserhomePageModule { }
