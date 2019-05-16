import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
import { MealProvider } from '../../providers/meal/meal';
import { ClientProvider } from '../../providers/client/client';
import { ModalController, LoadingController } from 'ionic-angular';
import { PaymentComponent } from '../../components/payment/payment';
import { NativeProvider } from '../../providers/native/native';
import { MailProvider } from '../../providers/mail/mail';
import { AuthProvider } from '../../providers/auth/auth';
import { Router } from '@angular/router';


export class ClientMeasure {
  height: String;
  weight: String;
  chest: String;
  biceps: String;  
  forearm: String;
  neck: String;
  shoulder: String;
  thigh: String;
}
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
  workoutTime: boolean;
  
  secondCtrl;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  work_plans;
  meal_plans;
  client_goal;
  client_level;
  client_measurement =new ClientMeasure();
  showPassword = false;
  eyeIcon = "eye";
  constructor(private formBuilder: FormBuilder, private workService: WorkoutProvider, private dataService: DataProvider, private mealService: MealProvider, private clientService: ClientProvider, private modal: ModalController, private nativeService: NativeProvider, private mailService: MailProvider, private authService: AuthProvider, private router: Router, private loadingCntrl: LoadingController) {
    this.firstFormGroup = formBuilder.group({
      // fname: ['', Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")],
      fname: ['', Validators.required],
    
      lname:['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['01:01:2000', Validators.required],
      pass: ['', Validators.required],
      cpass: ['', Validators.required]

    });
    this.secondFormGroup = formBuilder.group({
      client_goal: ['',Validators.required],
      // client_level: ['', Validators.required]
    });
    this.thirdFormGroup = formBuilder.group({
      // workout_plan: ['', Validators.required],
      // meal_plan: ['', Validators.required],
      // weeks: ['8', Validators.required]
    });
    // this.work_plans 
    console.log(authService.currentUserValue);
    this.workService.getMyWorkouts(dataService.u.id,authService.currentUserValue).subscribe(workData => {
      
      if(Object.keys(workData).length > 0) {    
        console.log('woklength'+workData.lenght)     
        this.work_plans = workData;
      }
      
      
    });
    this.mealService.getMyMeals(dataService.u.id,authService.currentUserValue).subscribe(mealData => {
      
      if(Object.keys(mealData).length > 0) {
      
        this.meal_plans = mealData;
      }
      
      
    });
  }
  open() {
    console.log('drop');  
  }
  addClient() {
    const email = this.firstFormGroup.get('email').value;
    this.client_measurement.biceps = "0";
    this.client_measurement.chest = "0";
    this.client_measurement.forearm = "0";
    this.client_measurement.height = "0";
    this.client_measurement.neck = "0";
    this.client_measurement.shoulder = "0";
    this.client_measurement.thigh = "0";
    this.client_measurement.weight = "0";
    
    // Commented for Removed Form controls
    // client_level: this.secondFormGroup.get('client_level').value
    // workout_planid: this.thirdFormGroup.get('workout_plan').value
    // weeks: weeks 
    // client_mealplan: this.thirdFormGroup.get('meal_plan').value
    // const weeks = this.thirdFormGroup.get('weeks').value;
    
    // if(this.firstFormGroup.valid == true && this.secondFormGroup.valid == true && this.thirdFormGroup.valid == true) {
    
      
      // this.mailService.sendMail({message: 'Your email is : '+email+' and password is :'+this.firstFormGroup.get('pass').value+' '+'Login in to PT_APP'},{sender: 'patel.abhishek@tristonsoft.com'},{recepeint: this.firstFormGroup.get('email').value},{token: this.authService.currentUserValue.token}).subscribe(mailData => {
      //   console.log(mailData);
      // });
    const loading = this.loadingCntrl.create({
      content: "Please wait..."
    });
    
      if(this.firstFormGroup.get('pass').value === this.firstFormGroup.get('cpass').value) {
        if(this.firstFormGroup.valid == true && this.secondFormGroup.valid == true) {
          const clientModel = {fname: this.firstFormGroup.get('fname').value,email: email, lname: this.firstFormGroup.get('lname').value,"client_goal": this.secondFormGroup.get('client_goal').value,"client_level": 'beginner', "trainerid": this.dataService.u.userid, "client_measurement": this.client_measurement, "dob": this.firstFormGroup.get('dob').value, "gender": this.firstFormGroup.get('gender').value, clientinfoid: '', password: this.firstFormGroup.get('pass').value };    
          console.log(clientModel);
          loading.present().then(loadingData => {
          this.clientService.addClient(clientModel,this.authService.currentUserValue).subscribe((data) => {
            
            // this.openModal();
            console.log(data);
            if(!data.error) {
              this.nativeService.generateToast('Client Added',"","bottom");
              
              this.mailService.sendMail({message: 'Your email is : '+email+' and password is :'+this.firstFormGroup.get('pass').value+' '+'Login in to PT_APP'},{sender: 'patel.abhishek@tristonsoft.com'},{recepeint: this.firstFormGroup.get('email').value},{token: this.authService.currentUserValue.token}).subscribe(mailData => {
                loading.dismiss();
                window.location.reload();
              });
              
            }
            else {
              this.nativeService.generateToast(data.error,"","bottom");
              loading.dismiss();
            }
            
            
          },(error) => {    
              
          this.nativeService.generateToast('Error Adding Client',"","bottom");
          loading.dismiss();
          }
          );    
        });
        }
        else {
            this.nativeService.generateToast('Please Fill the details Correctly','toast-error',"middle");
        }
      }
      else {
        this.nativeService.generateToast('Password & Confirm Password should Match','','bottom');
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
  showHide() {
    if(this.showPassword) {
      this.showPassword = false;
      this.eyeIcon = 'eye-off';
    }
    else {
      this.showPassword = true;
      this.eyeIcon = 'eye';
    }
  }
}
