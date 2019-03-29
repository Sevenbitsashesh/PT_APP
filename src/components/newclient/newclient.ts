import { Component } from '@angular/core';


@Component({
  selector: 'newclient',
  templateUrl: 'newclient.html'
})
export class NewclientComponent {
  selectOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings'
  };
  text: string;

  constructor() {
    console.log('Hello NewclientComponent Component');
    this.text = 'Hello World';
  }
  open() {
    console.log('drop');  
  }
}
