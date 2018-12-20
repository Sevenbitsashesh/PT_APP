import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { HometabComponent } from './hometab/hometab';
import { ProfileComponent } from './profile/profile';
import { ProfilepicComponent } from './profilepic/profilepic';

@NgModule({
	declarations: [FirstComponent,
    LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent],
	imports: [ IonicModule, CommonModule, RouterModule	],
	exports: [FirstComponent,
	LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent
],
    entryComponents: [LoginComponent, FirstComponent, ProfileComponent],

})
export class ComponentsModule {}
