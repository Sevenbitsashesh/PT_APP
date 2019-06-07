import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, LoadingController, ModalController, FabContainer } from 'ionic-angular';
import { NewworkoutComponent } from '../../../components/newworkout/newworkout';
import { Router } from '@angular/router';
import { UserDetails, AuthProvider } from '../../../providers/auth/auth';
import { UserInfo } from '../../../Models/users_info';
import { TokenPayload } from '../../../Models/users_info';
import { Subscription } from 'rxjs';
import { UserProvider } from '../../../providers/user/user';
import { DataProvider } from '../../../providers/data/data';
import { AdMobFree } from '@ionic-native/admob-free';
import { SelectclientComponent } from '../../../components/selectclient/selectclient';




@IonicPage()
@Component({
  selector: 'page-tabworkouts',
  templateUrl: 'tabworkouts.html',
})
export class TabworkoutsPage  {

  currentUser: UserDetails;
  userInfo: UserInfo;
  authDetails: TokenPayload;
  currentUserSubscription: Subscription;  
  workout;
  // Bottom Drawer Slider
drawerOptions: any;

  constructor(private router: Router, private authService: AuthProvider, private userService: UserProvider, private dataService: DataProvider, private adMob: AdMobFree, private modalCtrl: ModalController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 0,
      thresholdFromTop: 0,
      bounceBack: false
  };

    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
    
      this.currentUser = user;      
      // this.authDetails = this.authService.getUserDetails();
      
     this.dataService.getUserData(user);
  });
  }
  openNav() {
    document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
    let width = document.getElementById("mySidenav").style.width;
    if(width === '60%') {
      document.getElementById("mySidenav").style.width = '0%';
    }
    else {
      document.getElementById("mySidenav").style.width = '60%';
    }  
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
  }
  clickedContent() {
    document.getElementById("mySidenav").style.width = '0%';
    document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
  }
  logout() {
    // this.authService.logout().then(() => {
    //   console.log('Logged out Success');
    // });
  }
  clickNotification() {
    document.getElementById("mySidenav").style.width = '0%';
    if(document.getElementById('notificationDiv').classList.contains('click-not-slider-bar')) {
      document.getElementById('notificationDiv').classList.remove('click-not-slider-bar');
    }
    else {
      document.getElementById('notificationDiv').classList.add('click-not-slider-bar');
    }
    
  }
  ionViewDidLoad() {
    // this.nav.push(NewworkoutComponent);

  }
  newWorkout(fab: FabContainer) {
    let modalWorkout = this.modalCtrl.create(NewworkoutComponent);
    modalWorkout.onDidDismiss(data => {
      
    });
    modalWorkout.present();
    fab.close();
    // this.router.navigate(['/tab_workouts/newworkout']);   
  }  
  changeWorkout(event) {
    console.log('change',event)
    this.workout = event;
  }
  gotoDetails(item) {
    console.log(item);
    const selectModal = this.modalCtrl.create(SelectclientComponent,{workoutid: item.id, workoutname: item.work_name});
    selectModal.present();
    
    // .then(dataClient => {
    //   console.log(dataClient);
    // })
    // this.router.navigate(['/tab_workouts/workoutdetails'],{queryParams: {workid: item.id}});
  }
}
