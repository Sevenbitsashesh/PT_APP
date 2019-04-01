import { Component } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: `./dropdown.html`
})
export class DropdownComponent {
  values;
  constructor() {
this.values = ['Muscle Growth', 'Weight Loss', 'Athlete Body', 'Power Lifting', 'Gain Strength'];
  }

}
