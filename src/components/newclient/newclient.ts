import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
import { MealProvider } from '../../providers/meal/meal';
import { ClientProvider } from '../../providers/client/client';
import { ModalController } from 'ionic-angular';
import { PaymentComponent } from '../../components/payment/payment';



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
  client_goal;
  client_level;
  constructor(private formBuilder: FormBuilder, private workService: WorkoutProvider, private dataService: DataProvider, private mealService: MealProvider, private clientService: ClientProvider, private modal: ModalController) {
    this.firstFormGroup = formBuilder.group({
      first_name: ['', Validators.pattern('[a-z]')],
    
      last_name:['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = formBuilder.group({
      client_goal: ['',Validators.required],
      client_level: ['', Validators.required]
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
    const clientModel = {first_name: "", last_name: ""};    
    this.clientService.addClient(clientModel).subscribe(data => {
      this.openModal();
    });    
  }
  openModal() {
        return this.modal.create(PaymentComponent).present();
  }
}
