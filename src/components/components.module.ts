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
import { UserprofileComponent } from './userprofile/userprofile';
import { NotificationComponent } from './notification/notification';
import { SettingComponent } from './setting/setting';


@NgModule({
	declarations: [FirstComponent,
    LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent,
    SettingComponent],
	imports: [ IonicModule, CommonModule, RouterModule	],
	exports: [FirstComponent,
	LoginComponent,
    HometabComponent,
    ProfileComponent,
    ProfilepicComponent,
    SettingComponent],
    entryComponents: [LoginComponent, FirstComponent, ProfileComponent],

})
export class ComponentsModule {}
