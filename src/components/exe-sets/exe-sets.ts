import { Component } from '@angular/core';

/**
 * Generated class for the ExeSetsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exe-sets',
  templateUrl: 'exe-sets.html'
})
export class ExeSetsComponent {

  text: string;

  constructor() {
    console.log('Hello ExeSetsComponent Component');
    this.text = 'Hello World';
  }

}
