import { Component } from '@angular/core';
/**
 * Generated class for the UsertabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'usertabs',
  templateUrl: 'usertabs.html'
})
export class UsertabsComponent {

  text: string;

  constructor() {
    console.log('Hello UsertabsComponent Component');
    this.text = 'Hello World';
  }

}
