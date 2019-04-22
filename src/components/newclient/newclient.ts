import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
import { MealProvider } from '../../providers/meal/meal';
import { ClientProvider } from '../../providers/client/client';
import { ModalController } from 'ionic-angular';
import { PaymentComponent } from '../../components/payment/payment';
import { NativeProvider } from '../../providers/native/native';
import { MailProvider } from '../../providers/mail/mail';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'newclient',
  templateUrl: 'newclient.html'
})
export class NewclientComponent implements OnChanges, OnInit  {
  @Input() currentUser;
  selectOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings'
  };
  
  
  secondCtrl;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  work_plans;
  meal_plans;
  client_goal;
  client_level;
  constructor(private formBuilder: FormBuilder, private workService: WorkoutProvider, private dataService: DataProvider, private mealService: MealProvider, private clientService: ClientProvider, private modal: ModalController, private nativeService: NativeProvider, private mailService: MailProvider, private authService: AuthProvider) {
    this.firstFormGroup = formBuilder.group({
      fname: ['', Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")],
    
      lname:['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = formBuilder.group({
      client_goal: ['',Validators.required],
      client_level: ['', Validators.required]
    });
    this.thirdFormGroup = formBuilder.group({
      workout_plan: ['', Validators.required],
      meal_plan: ['', Validators.required]
    });
    // this.work_plans 
    console.log(authService.currentUserValue);
    this.workService.getMyWorkouts(dataService.u.id,authService.currentUserValue).subscribe(workData => {
      if(workData.length > 0) {        
        this.work_plans = workData;
      }
      
      
    });
    this.mealService.getMyMeals(dataService.u.id,authService.currentUserValue).subscribe(mealData => {
      console.log(mealData)
      if(mealData.lenght > 0) {
        
        this.meal_plans = mealData;
      }
      
      
    });
  }
  open() {
    console.log('drop');  
  }
  addClient() {
    const email = this.firstFormGroup.get('email').value;
    if(this.firstFormGroup.valid == true && this.secondFormGroup.valid == true && this.thirdFormGroup.valid == true) {
      const clientModel = {fname: this.firstFormGroup.get('fname').value,email: email, lname: this.firstFormGroup.get('lname').value,client_level: this.secondFormGroup.get('client_level').value,client_goal: this.secondFormGroup.get('client_goal').value,client_workplan: this.thirdFormGroup.get('workout_plan').value,client_mealplan: this.thirdFormGroup.get('meal_plan').value  , "trainerid": this.dataService.u.userid};    
      this.clientService.addClient(clientModel,this.authService.currentUserValue).subscribe((data) => {
        // this.openModal();
        if(email) {
          this.nativeService.generateToast('Client Added',"","bottom");
          
          // this.mailService.sendMail({message: 'Your email is : '+email+' and password is :'+'example'+' '+'Login in to https://pt-fits-life.firebaseapp.com'},{sender: 'Ashesh'},{email},{token: this.authService.currentUserValue.token}).subscribe(mailData => {
          //   console.log(mailData);
          // })
        }
        else {
          this.nativeService.generateToast('Error Adding Client',"","bottom");
        }
        
        
      },(error) => {      
      this.nativeService.generateToast('Error Adding Client',"","bottom");
      }
      );    
    }
    else {
        this.nativeService.generateToast('Please Fill the details Correctly','toast-error',"middle");
    }
    
  }
  ngOnChanges() {
    // console.log('changing');
  }
  // openModal() {
  //       return this.modal.create(PaymentComponent).present();
  // }
  ngOnInit() {
    console.log('init client')
  }
}
