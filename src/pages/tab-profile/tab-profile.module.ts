import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabProfilePage } from './tab-profile';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TabProfilePage
  }
]
@NgModule({
  declarations: [
    TabProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TabProfilePage),
    RouterModule.forChild(routes)
  ],
})
export class TabProfilePageModule {}
