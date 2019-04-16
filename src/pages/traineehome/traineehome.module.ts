import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraineehomePage } from './traineehome';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardProvider } from '../../providers/authguard/authguard';
const routes: Routes = [
  {
    path: '',
    component: TraineehomePage,
    // canActivate: [AuthguardProvider]
  }
]
@NgModule({
  declarations: [
    TraineehomePage,
  ],
  imports: [
    IonicPageModule.forChild(TraineehomePage),
    RouterModule.forChild(routes)
  ],
})
export class TraineehomePageModule {}
