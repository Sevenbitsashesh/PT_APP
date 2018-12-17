import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UserhomePageModule } from './userhome.module';
import { UserhomePage } from './userhome';
import { TabHomePageModule } from '../tab-home/tab-home.module';
import { TabHomePage } from '../tab-home/tab-home';
import { LoginComponent } from '../../components/login/login';
import { HometabComponent } from '../../components/hometab/hometab';

const routes: Routes = [
    // {
    //   path: '',
    // component: UserhomePage
    // },
    {
        path: 'tabs',
        component: UserhomePage,
        children : [
            {
                path: 'tab_home',
                 component: HometabComponent,
            }
        ]
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