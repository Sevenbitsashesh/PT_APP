import { Component } from '@angular/core';

/**
 * Generated class for the NewclientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'newclient',
  templateUrl: 'newclient.html'
})
export class NewclientComponent {

  text: string;

  constructor() {
    console.log('Hello NewclientComponent Component');
    this.text = 'Hello World';
  }

}
