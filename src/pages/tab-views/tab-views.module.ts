import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabViewsPage } from './tab-views';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { NotificationComponent } from '../../components/notification/notification';

const routes : Routes= [
  {
    path: '',
    component: TabViewsPage
  }
]
@NgModule({
  declarations: [
    TabViewsPage,
    NotificationComponent
  ],
  imports: [
    IonicPageModule.forChild(TabViewsPage),
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class TabViewsPageModule {}
