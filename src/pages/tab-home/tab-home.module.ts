import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabHomePage } from './tab-home';
import { Routes, RouterModule } from '@angular/router';
import { VerificationPageModule } from '../verification/verification.module';
import { VerificationPage } from '../verification/verification';
import { CreateTweetComponent } from '../../components/create-tweet/create-tweet';
import { TweetslistComponent } from '../../components/tweetslist/tweetslist';
import { ProgressbarComponent } from '../../components/progressbar/progressbar';
import { ComponentsModule } from '../../components/components.module';


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
    TabHomePage,
    CreateTweetComponent,
    TweetslistComponent,
    ProgressbarComponent
  ],
  imports: [
    IonicPageModule.forChild(TabHomePage),
    RouterModule.forChild(routes),
    VerificationPageModule,
    ComponentsModule
  ],
})
export class TabHomePageModule {}
