import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabSearchPage } from './tab-search';

@NgModule({
  declarations: [
    TabSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TabSearchPage),
  ],
})
export class TabSearchPageModule {}
