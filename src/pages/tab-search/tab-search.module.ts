import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabSearchPage } from './tab-search';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TabSearchPage
  }
]
@NgModule({
  declarations: [
    TabSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TabSearchPage),
    RouterModule.forChild(routes)
  ],
})
export class TabSearchPageModule {}
