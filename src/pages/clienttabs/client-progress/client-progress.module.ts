import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ClientProgressPage } from './client-progress';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ClientProgressPage
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
    ClientProgressPage,
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ClientProgressPageModule {}
