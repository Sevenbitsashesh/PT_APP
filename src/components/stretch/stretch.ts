import { Component } from '@angular/core';
import { Element } from '@angular/compiler';


@Component({
  selector: 'stretch',
  templateUrl: 'stretch.html'
})
export class StretchComponent  {

  constructor() {
    
  }
  

}

interface HtmlElement {
  extended?:  any;
}