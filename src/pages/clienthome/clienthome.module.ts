import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienthomePage } from './clienthome';

@NgModule({
  declarations: [
    ClienthomePage,
  ],
  imports: [
    IonicPageModule.forChild(ClienthomePage),
  ],
})
export class ClienthomePageModule {}
