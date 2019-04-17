import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UserhomePageModule } from './userhome.module';
import { UserhomePage } from './userhome';
import { TabHomePageModule } from '../clienttabs/tab-home/tab-home.module';
import { TabHomePage } from '../clienttabs/tab-home/tab-home';
import { LoginComponent } from '../../components/login/login';
import { HometabComponent } from '../../components/hometab/hometab';
import { TabSearchPageModule } from '../clienttabs/tab-search/tab-search.module';
import { TabProfilePageModule } from '../trainertabs/tab-profile/tab-profile.module';
import { TabViewsPageModule } from '../clienttabs/tab-views/tab-views.module';
import { TabexercisesPageModule } from '../../pages/trainertabs/tabexercises/tabexercises.module';
import { TabworkoutsPageModule } from '../../pages/trainertabs/tabworkouts/tabworkouts.module';
import { TabmealplansPageModule } from '../../pages/trainertabs/tabmealplans/tabmealplans.module';

import { TabschedulePageModule } from '../../pages/trainertabs/tabschedule/tabschedule.module';


import { RoleguardProvider } from '../../providers/roleguard/roleguard';
import { Roles } from '../../Models/roles';
import { TabClientsPageModule } from '../../pages/trainertabs/tab-clients/tab-clients.module';



export function getHomeModule() { return TabHomePageModule; }
export function getSearchModule() { return TabSearchPageModule; }
export function getProfileModule() {  return TabProfilePageModule; }
export function getViewModule() { return TabViewsPageModule; }
export function getExercisesModule() {  return TabexercisesPageModule; }
export function getWorkoutsModule() { return TabworkoutsPageModule; }
export function getMealplansModule() { return TabmealplansPageModule; }
export function getScheduleModule() { return TabschedulePageModule }
export function getClientsModule() { return TabClientsPageModule }

const routes: Routes = [
{
        path: '',
        loadChildren: getExercisesModule,
        canActivate: [RoleguardProvider],
        //        data: {roles: [Roles]}
},
{
    path: 'tab_exercises',
    loadChildren: getExercisesModule,
},
{
    path: 'tab_workouts',
    loadChildren: getWorkoutsModule
},
{
    path: 'tab_mealplans',
    loadChildren: getMealplansModule
},
{
    path: 'tab_schedule',
    loadChildren: getScheduleModule
},
{
    path: 'tab_profile',
    //  component: TabHomePage,
    loadChildren: getProfileModule
},
{
    path: 'tab_clients',
    //  component: TabHomePage,
    loadChildren: getClientsModule
},
        //    {
        //        path: 'trainerhome',
        //        loadChildren: getTrainerhomeModule,
        //     //    canActivate: [RoleguardProvider],
        //     //    data: {roles: [Roles.Trainer]}
        //    },
        //    {
        //     path: 'clienthome',
        //     loadChildren: getClienthomeModule,
        //     // canActivate: [RoleguardProvider],
        //     // data: {roles:  Roles.Client}
        // }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UserRoutingModule { }