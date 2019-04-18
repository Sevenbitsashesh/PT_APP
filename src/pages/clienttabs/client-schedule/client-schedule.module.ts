import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ClientSchedulePage } from './client-schedule';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ClientSchedulePage
  },
  // {
  //   path: 'newclient',
  //   component: NewclientComponent
  // },
  // {
  //   path: 'myclients',
  //   component: MyclientsComponent
  // }
        
]
@NgModule({
  declarations: [
    ClientSchedulePage,
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ClientSchedulePageModule {}
