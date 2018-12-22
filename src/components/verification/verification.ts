import { Component } from '@angular/core';

/**
 * Generated class for the VerificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'verification',
  templateUrl: 'verification.html'
})
export class VerificationComponent {

  text: string;

  constructor() {
    console.log('Hello VerificationComponent Component');
    this.text = 'Hello World';
  }

}
