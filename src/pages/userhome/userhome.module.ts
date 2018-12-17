import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { UserhomePage } from './userhome';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { UsertabsComponent } from './usertabs'
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

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
    ComponentsModule
  ],
  bootstrap: [ UserhomePage ],
  entryComponents: [UserhomePage],
  exports: [UserRoutingModule]
})
export class UserhomePageModule { }
