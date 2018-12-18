import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  }
]
@NgModule({
  declarations: [
    TabHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabHomePage),
    RouterModule.forChild(routes)
  ],
})
export class TabHomePageModule {}
