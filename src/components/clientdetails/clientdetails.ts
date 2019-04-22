import { Component } from '@angular/core';


@Component({
  selector: 'clientdetails',
  templateUrl: 'clientdetails.html'
})
export class ClientdetailsComponent {

  text: string;

  constructor() {
    console.log('Hello ClientdetailsComponent Component');
    this.text = 'Hello World';
  }

}
