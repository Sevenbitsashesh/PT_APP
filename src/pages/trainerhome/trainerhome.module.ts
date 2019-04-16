import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainerhomePage } from './trainerhome';
import { ComponentsModule } from '../../components/components.module';
import { TrainerRoutingModule } from './trainer.routing';




@NgModule({
  declarations: [
    TrainerhomePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainerhomePage),
    TrainerRoutingModule,
    ComponentsModule
  ],
})
export class TrainerhomePageModule {}
