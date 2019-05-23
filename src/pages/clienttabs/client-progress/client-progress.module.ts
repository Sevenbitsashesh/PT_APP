import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ClientProgressPage } from './client-progress';
import { Routes, RouterModule } from '@angular/router';
import { MyprogressComponent } from '../../../components/myprogress/myprogress';
import { ComponentsModule } from '../../../components/components.module';
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
    MyprogressComponent,
    
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class ClientProgressPageModule {}
