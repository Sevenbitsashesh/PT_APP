import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabmealplansPage } from './tabmealplans';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { NewmealplansComponent } from '../../../components/newmealplans/newmealplans';


const routes: Routes = [
  {
    path: '',
    component: TabmealplansPage
  },
  {
    path: 'newmealplan',
    component: NewmealplansComponent
  },
        
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
