import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home';
import { Routes, RouterModule } from '@angular/router';
import { VerificationPageModule } from '../verification/verification.module';
import { VerificationPage } from '../verification/verification';
const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  },
  {
    path: 'verification',
    component: VerificationPage
    // loadChildren: () => VerificationPageModule
  }
        
]
@NgModule({
  declarations: [
    TabHomePage
  ],
  imports: [
    IonicPageModule.forChild(TabHomePage),
    RouterModule.forChild(routes),
    VerificationPageModule
  ],
})
export class TabHomePageModule {}
