import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabSearchPage } from './tab-search';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from '../../../components/userprofile/userprofile';
import { ComponentsModule } from '../../../components/components.module';


const routes: Routes = [
  // {
  //   path: '',
  //   component: TabSearchPage
  // },
  {
    path: 'userprofile/:userid',
    component: UserprofileComponent
  }
]
@NgModule({
  declarations: [
    TabSearchPage,
    UserprofileComponent
  ],
  imports: [
    IonicPageModule.forChild(TabSearchPage),
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class TabSearchPageModule {}
