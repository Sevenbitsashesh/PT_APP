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
import { TabViewsPageModule } from '../tab-views/tab-views.module';
import { TabexercisesPageModule } from '../../pages/tabexercises/tabexercises.module';
import { TabworkoutsPageModule } from '../../pages/tabworkouts/tabworkouts.module';
import { TabmealplansPageModule } from '../../pages/tabmealplans/tabmealplans.module';

import { TabschedulePageModule } from '../../pages/tabschedule/tabschedule.module';

export function getHomeModule() { return TabHomePageModule; }
export function getSearchModule() { return TabSearchPageModule; }
export function getProfileModule() {  return TabProfilePageModule; }
export function getViewModule() { return TabViewsPageModule; }
export function getExercisesModule() {  return TabexercisesPageModule; }
export function getWorkoutsModule() { return TabworkoutsPageModule; }
export function getMealplansModule() { return TabmealplansPageModule; }
export function getScheduleModule() { return TabschedulePageModule }
const routes: Routes = [
{
        path: '',
        loadChildren: getExercisesModule
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
           
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UserRoutingModule { }