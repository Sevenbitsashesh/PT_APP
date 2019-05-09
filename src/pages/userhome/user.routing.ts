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




export function getHomeModule() { return TabHomePageModule; }
export function getSearchModule() { return TabSearchPageModule; }
export function getProfileModule() {  return TabProfilePageModule; }
export function getViewModule() { return TabViewsPageModule; }
export function getExercisesModule() {  return TabexercisesPageModule; }
export function getWorkoutsModule() { return TabworkoutsPageModule; }
export function getMealplansModule() { return TabmealplansPageModule; }
export function getScheduleModule() { return TabschedulePageModule }
export function getClientsModule() { return TabClientsPageModule }


//ClientsModules
import { TabClientsPageModule } from '../../pages/trainertabs/tab-clients/tab-clients.module';
import { ClientProgressPageModule } from '../../pages/clienttabs/client-progress/client-progress.module';
import { ClientSchedulePageModule } from '../../pages/clienttabs/client-schedule/client-schedule.module';
import { ClientProfileModule } from '../../pages/clienttabs/client-profile/client-profile.module';
import { ClientMealPageModule } from '../../pages/clienttabs/client-meal/client-meal.module';
import { TrainerroleguardProvider } from '../../providers/trainerroleguard/trainerroleguard';
import { ClientroleguardProvider } from '../../providers/clientroleguard/clientroleguard';
export function getClientProgressModule() { return ClientProgressPageModule }
export function getClientScheduleModule() { return ClientSchedulePageModule }
export function getClientProfileModule() { return ClientProfileModule }
export function getClientMealModule() { return ClientMealPageModule }

const routes: Routes = [
{
        path: '',
        loadChildren: getExercisesModule,
        canActivate: [RoleguardProvider],
        //        data: {roles: [Roles]}
},
//Trainer Routes
{
    path: 'tab_exercises',
    loadChildren: getExercisesModule,
    canActivate: [TrainerroleguardProvider],
},
{
    path: 'tab_workouts',
    loadChildren: getWorkoutsModule,
    canActivate: [TrainerroleguardProvider],
},
// {
//     path: 'tab_mealplans',
//     loadChildren: getMealplansModule,
//     canActivate: [TrainerroleguardProvider],
// },
{
    path: 'tab_schedule',
    loadChildren: getScheduleModule,
    canActivate: [TrainerroleguardProvider],
},
// {
//     path: 'tab_profile',
//     //  component: TabHomePage,
//     loadChildren: getProfileModule,
//     canActivate: [TrainerroleguardProvider],
// },
{
    path: 'tab_clients',
    //  component: TabHomePage,
    loadChildren: getClientsModule,
    canActivate: [TrainerroleguardProvider],
},
// {
//     path: 'tab_clients',
//     //  component: TabHomePage,
//     loadChildren: getClientsModule,
//     canActivate: [TrainerroleguardProvider],
// },
//Clients Routes
  {
      path: 'client_progress',
      loadChildren: getClientProgressModule,
      canActivate: [ClientroleguardProvider],
  },
  {
    path: 'client_meal',
    loadChildren: getClientMealModule,
    canActivate: [ClientroleguardProvider],
},
{
    path: 'client_profile',
    loadChildren: getClientProfileModule,
    canActivate: [ClientroleguardProvider],
},
{
    path: 'client_schedule',
    loadChildren: getClientScheduleModule,
    canActivate: [ClientroleguardProvider],
},

];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UserRoutingModule { }