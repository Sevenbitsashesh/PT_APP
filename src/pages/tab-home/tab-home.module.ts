import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home';
import { Routes, RouterModule } from '@angular/router';
import { VerificationComponent } from '../../components/verification/verification';
const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  },
  {
    path: 'verification',
    component: VerificationComponent,
    // outlet: 'veriModal'
  }
        
]
@NgModule({
  declarations: [
    TabHomePage,
    VerificationComponent 
  ],
  imports: [
    IonicPageModule.forChild(TabHomePage),
    RouterModule.forChild(routes)
  ],
})
export class TabHomePageModule {}
