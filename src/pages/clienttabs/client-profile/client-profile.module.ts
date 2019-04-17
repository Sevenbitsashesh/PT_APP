import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ProfileClient } from './client-profile';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera';

const routes: Routes = [
  {
    path: '',
    component: ProfileClient
  }
]
@NgModule({
  declarations: [
    ProfileClient
  ],
  imports: [
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [Camera]
})
export class TabProfilePageModule {}
