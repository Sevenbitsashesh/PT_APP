import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { UserhomePage } from './userhome';
import { UserRoutingModule } from './user.routing';
import { UsertabsComponent } from '../../components/usertabs/usertabs';

@NgModule({
  declarations: [
    UserhomePage,
    UsertabsComponent
  ],
  imports: [
    // IonicPageModule.forChild(UserhomePage),
    IonicModule.forRoot(UsertabsComponent),
    UserRoutingModule
  ],
  bootstrap: [ UserhomePage ],
  entryComponents: [UserhomePage],
  exports: [UserRoutingModule]
})
export class UserhomePageModule { }
