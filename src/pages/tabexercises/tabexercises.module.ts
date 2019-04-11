import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavControllerBase, NavParams, Nav, IonicModule } from 'ionic-angular';
import { TabexercisesPage } from './tabexercises';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewclientComponent } from '../../components/newclient/newclient';


const routes: Routes = [
  {
    path: '',
    component: TabexercisesPage
  },
  {
    path: 'newclient',
    component: NewclientComponent
  }
        
]


@NgModule({
  declarations: [
    TabexercisesPage,
  ],
  imports: [
    IonicModule, 
    RouterModule.forChild(routes),
    ComponentsModule,
    
  ],
  providers: [
    
  ]
})
export class TabexercisesPageModule {}
