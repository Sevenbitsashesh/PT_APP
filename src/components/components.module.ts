import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { HometabComponent } from './hometab/hometab';

@NgModule({
	declarations: [FirstComponent,
    LoginComponent,
    HometabComponent],
	imports: [ IonicModule, CommonModule, RouterModule	],
	exports: [FirstComponent,
	LoginComponent,
    HometabComponent
],
	entryComponents: [LoginComponent, FirstComponent]
})
export class ComponentsModule {}
