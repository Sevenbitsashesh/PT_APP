import { Component } from '@angular/core';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {

  text: string;

  constructor() {
    console.log('Hello PaymentComponent Component');
    this.text = 'Hello World';
  }

}
