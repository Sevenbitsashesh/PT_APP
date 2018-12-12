import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first';
import { LoginComponent } from './login/login';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
	declarations: [FirstComponent,
    LoginComponent],
	imports: [ IonicModule, CommonModule, RouterModule	],
	exports: [FirstComponent,
	LoginComponent
],
	entryComponents: [LoginComponent, FirstComponent]
})
export class ComponentsModule {}
