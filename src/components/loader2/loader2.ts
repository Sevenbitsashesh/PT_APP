import { Component } from '@angular/core';

/**
 * Generated class for the Loader2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loader2',
  templateUrl: 'loader2.html'
})
export class Loader2Component {

  text: string;

  constructor() {
    console.log('Hello Loader2Component Component');
    this.text = 'Hello World';
  }

}
