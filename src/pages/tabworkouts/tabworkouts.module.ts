import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { TabworkoutsPage } from './tabworkouts';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ListworkoutsComponent } from '../../components/listworkouts/listworkouts';


const routes: Routes = [
  {
    path: '',
    component: TabworkoutsPage,
    data: {animation: 'TabexercisesPage'}
  }
        
]


@NgModule({
  declarations: [
    TabworkoutsPage,
    ListworkoutsComponent
  ],
  imports: [
    IonicPageModule.forChild(TabworkoutsPage),
    RouterModule.forChild(routes),
    ComponentsModule,
    
  ],
  entryComponents: [ListworkoutsComponent]
})
export class TabworkoutsPageModule {}
