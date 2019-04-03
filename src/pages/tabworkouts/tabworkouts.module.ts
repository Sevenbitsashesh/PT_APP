import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, IonicModule } from 'ionic-angular';
import { TabworkoutsPage } from './tabworkouts';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ListworkoutsComponent } from '../../components/listworkouts/listworkouts';
import { NewworkoutComponent } from '../../components/newworkout/newworkout';


const routes: Routes = [
  {
    path: '',
    component: TabworkoutsPage
  },
  {
    path: 'newworkout',
    component: NewworkoutComponent
  }
        
]


@NgModule({
  declarations: [
    TabworkoutsPage
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    
  ],
  entryComponents: [NewworkoutComponent]
})
export class TabworkoutsPageModule {}
