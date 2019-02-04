import { Directive } from '@angular/core';
import { AsyncValidator } from '@angular/forms';

@Directive({
  selector: '[existing-userid-validator]' // Attribute selector
})
export class ExistingUseridValidatorDirective {

  constructor() {

  }

}
