import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stepper',
  templateUrl: 'stepper.html'
})
export class StepperComponent {
  secondCtrl;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.firstFormGroup = formBuilder.group({
        firstCtrl:[Validators.required ]
      });
      this.secondFormGroup = formBuilder.group({
        secondCtrl: [Validators.required]
      })
  }

}
