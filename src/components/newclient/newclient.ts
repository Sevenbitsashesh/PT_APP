import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
import { MealProvider } from '../../providers/meal/meal';
import { ClientProvider } from '../../providers/client/client';


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
  work_plans;
  meal_plans;
  constructor(private formBuilder: FormBuilder, private workService: WorkoutProvider, private dataService: DataProvider, private mealService: MealProvider, private clientService: ClientProvider) {
    this.firstFormGroup = formBuilder.group({
      firstCtrl:[Validators.required ]
    });
    this.secondFormGroup = formBuilder.group({
      secondCtrl: [Validators.required]
    });
    // this.work_plans 
    
    this.workService.getMyWorkouts("5c6a8dbfe7179a27eb625ac3").subscribe(workData => {
      this.work_plans = workData;
      // console.log(workData);
    });
    this.mealService.getMyMeals("5c6a8dbfe7179a27eb625ac3").subscribe(mealData => {
      this.meal_plans = mealData;
      // console.log(mealData);
    });
  }
  open() {
    console.log('drop');  
  }
  addClient() {
    const clientModel = {trainerid: ""};
    this.clientService.addClient(clientModel).subscribe(data => {
      console.log(data);
    });
  }
}
