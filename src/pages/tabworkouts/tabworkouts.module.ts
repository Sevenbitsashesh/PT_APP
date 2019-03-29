import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabworkoutsPage } from './tabworkouts';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: TabworkoutsPage
  }
        
]


@NgModule({
  declarations: [
    TabworkoutsPage
  ],
  imports: [
    IonicPageModule.forChild(TabworkoutsPage),
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class TabworkoutsPageModule {}
