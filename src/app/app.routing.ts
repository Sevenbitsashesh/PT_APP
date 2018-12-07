import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "../pages/home/home";
import { LoginComponent } from "../components/login/login";
import { FirstComponent } from '../components/first/first';

// const appRoutes: Routes = [
//     {path: 'login', component: LoginComponent},
// //  {path: 'home', component: HomePage },
//   // {path: 'create', component: CreateComponent},
//   // { path: 'usertabs', loadChildren: './home/usertabs/usertabs.module#UsertabsPageModule'},
//    { path: 'first', component: FirstComponent    },
//    { path: 'home', pathMatch: 'full', component: HomePage},
//    { path: '', pathMatch: 'full', component: LoginComponent}
//     ];
    @NgModule({
        // imports: [RouterModule.forRoot(appRoutes)],
        // exports: [RouterModule]
    })
    export class AppRoutingModule {
    }