import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienthomePage } from './clienthome';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: ClienthomePage,
    // canActivate: [AuthguardProvider]
  }
]
@NgModule({
  declarations: [
    ClienthomePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienthomePage),
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class ClienthomePageModule {}
