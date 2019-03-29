import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabmealplansPage } from './tabmealplans';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: TabmealplansPage
  }
        
]

@NgModule({
  declarations: [
    TabmealplansPage,
  ],
  imports: [
    IonicPageModule.forChild(TabmealplansPage),
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class TabmealplansPageModule {}
