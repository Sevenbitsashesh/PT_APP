import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TabschedulePage } from './tabschedule';
import { Routes, Router, RouterModule } from '@angular/router';
import { ViewscheduleComponent } from '../../components/viewschedule/viewschedule';
import { ComponentsModule } from '../../components/components.module';
import { IgxDatePickerModule } from 'igniteui-angular/date-picker/date-picker.component';

const routes: Routes = [
  {
    path: '',
    component: TabschedulePage
  },
  
        
]
@NgModule({
  declarations: [
    TabschedulePage,
    
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    IgxDatePickerModule
  ],
})
export class TabschedulePageModule {}
