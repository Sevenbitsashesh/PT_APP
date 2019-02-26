import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[existing-userid-validator]' // Attribute selector
})
export class ExistingUseridValidatorDirective implements AsyncValidator {

  constructor(private userService: UserProvider) {

  }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return existingUsernameValidator(this.userService)(control);
  }
}
export function existingUsernameValidator(userService: UserProvider): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    let debounceTime = 500; //milliseconds
    return Observable.timer(debounceTime).switchMap(()=> {
      return userService.getUserByUId(control.value).map(
        users => {
          return (users && users.length > 0) ? {"usernameExists": true} : null;
        }
      );
    });
  };
} 
