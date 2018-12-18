import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UserhomePageModule } from './userhome.module';
import { UserhomePage } from './userhome';
import { TabHomePageModule } from '../tab-home/tab-home.module';
import { TabHomePage } from '../tab-home/tab-home';
import { LoginComponent } from '../../components/login/login';
import { HometabComponent } from '../../components/hometab/hometab';
import { TabSearchPageModule } from '../tab-search/tab-search.module';
import { TabProfilePageModule } from '../tab-profile/tab-profile.module';

const routes: Routes = [
//     {
//         path: '',
//         loadChildren: () => TabHomePageModule
// },
            {
                path: 'tab_home',
                //  component: TabHomePage,
                loadChildren: () => TabHomePageModule
            },
            {
                path: 'tab_search',
                //  component: TabHomePage,
                loadChildren: () => TabSearchPageModule
            },
            {
                path: 'tab_profile',
                //  component: TabHomePage,
                loadChildren: () => TabProfilePageModule
            },
        
    // {  
    //         path: 'tab_home',
    //         outlet: 'tab_home',
    //          component: HometabComponent,
    //         // loadChildren: '../tab-home/tab-home.module#TabHomePageModule'
        
    //   },

    
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UserRoutingModule { }