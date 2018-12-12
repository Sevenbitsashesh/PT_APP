import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UserhomePageModule } from './userhome.module';
import { UserhomePage } from './userhome';
const routes: Routes = [
    {
      path: '',
    // loadChildren: './userhome.module#UserhomePageModule'
    component: UserhomePage
    },
    // {
    //     path: 'usertabs',
    //     children: [
    //         {
    //             path: '',
    //             // component: UsertabsPage
    //         }
    //     ]
    // }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UserRoutingModule { }