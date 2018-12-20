import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabProfilePage } from './tab-profile';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: TabProfilePage
  }
]
@NgModule({
  declarations: [
    TabProfilePage
  ],
  imports: [
    IonicPageModule.forChild(TabProfilePage),
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
})
export class TabProfilePageModule {}
