import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "../pages/home/home";
import { LoginComponent } from "../components/login/login";
import { FirstComponent } from '../components/first/first';
import { UserhomePage } from '../pages/userhome/userhome';
import { UserhomePageModule } from '../pages/userhome/userhome.module';
// import { UserhomePageModule } from 'src/pages/userhome/userhome.module';
import {  } from '@auth0/angular-jwt';
export function getTestModule() { return UserhomePageModule; }

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},

   { path: 'first', component: FirstComponent },
   { path: 'home', pathMatch: 'full', component: HomePage},
   
   { path: 'userhome', component: UserhomePage, 
   
//    loadChildren: () => UserhomePageModule 
loadChildren: getTestModule
    },
    { path: '', pathMatch: 'full', component: LoginComponent},
    ];
    @NgModule({
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule {
        
    }
    export function myFunc(): boolean { return true; }
