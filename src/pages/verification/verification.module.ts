import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerificationPage } from './verification';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  // {
  //   path: 'veri',
  //   component: VerificationComponent,
  //   // outlet: 'veriModal'
    
  // }
]
@NgModule({
  declarations: [
    
  ],
  imports: [
    IonicPageModule.forChild(VerificationPage),
    RouterModule.forChild(routes)
  ],
  entryComponents: []
})
export class VerificationPageModule {}
