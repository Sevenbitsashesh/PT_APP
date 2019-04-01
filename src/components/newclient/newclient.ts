import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'newclient',
  templateUrl: 'newclient.html'
})
export class NewclientComponent {
  selectOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings'
  };
  
  
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
  open() {
    console.log('drop');  
  }
}
