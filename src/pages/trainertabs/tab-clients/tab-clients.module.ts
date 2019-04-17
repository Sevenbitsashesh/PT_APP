import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TabClientsPage } from './tab-clients';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TabClientsPage
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
    TabClientsPage,
  ],
  imports: [
    // IonicPageModule.forChild(TabClientsPage),
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class TabClientsPageModule {}
