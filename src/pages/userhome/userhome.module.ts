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
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    TabSearchPageModule,
    TabProfilePageModule
    
  ],
  bootstrap: [],
  entryComponents: [],
  exports: [],
  providers: [UseractivityProvider]
})
export class UserhomePageModule { }
