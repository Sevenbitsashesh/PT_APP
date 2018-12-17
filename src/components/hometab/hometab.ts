import { Component } from '@angular/core';

/**
 * Generated class for the HometabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hometab',
  templateUrl: 'hometab.html'
})
export class HometabComponent {

  text: string;

  constructor() {
    console.log('Hello HometabComponent Component');
    this.text = 'Hello World';
  }

}
