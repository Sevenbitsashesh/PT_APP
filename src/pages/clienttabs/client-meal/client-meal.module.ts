import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ClientMealPage } from './client-meal';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ClientMealPage
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
    ClientMealPage,
  ],
  imports: [
    // IonicPageModule.forChild(ClientMealPage),
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class ClientMealPageModule {}
