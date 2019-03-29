import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavControllerBase, NavParams, Nav } from 'ionic-angular';
import { TabexercisesPage } from './tabexercises';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: TabexercisesPage
  }
        
]


@NgModule({
  declarations: [
    TabexercisesPage,
  ],
  imports: [
    IonicPageModule.forChild(TabexercisesPage), 
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  providers: [
    
  ]
})
export class TabexercisesPageModule {}
