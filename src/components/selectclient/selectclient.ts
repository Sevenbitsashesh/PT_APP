import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { WorkoutProvider } from '../../providers/workout/workout';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { ClientProvider } from '../../providers/client/client';
import { ActivatedRoute } from '@angular/router';
import { NativeProvider } from '../../providers/native/native';

@Component({
  selector: 'selectclient',
  templateUrl: 'selectclient.html'
})
export class SelectclientComponent {
  selectedClient = [];
  unselectedClient = [];
  constructor(private viewController: ViewController,private authService: AuthProvider,private dataService: DataProvider ,private workService: WorkoutProvider, private clientSrevice: ClientProvider, private navParam: NavParams, private nativeService: NativeProvider) {
    this.dataService.clientInfoObs.subscribe(da => {
        this.clientSrevice.getMyClients(da,authService.currentUserValue).subscribe(clientData => {
          
          for(let i = 0;i < clientData.length; i++) {
            
            const client = clientData[i].client_workplan;
            if(client) {
              
                
              if(client[0].workout_planid === this.navParam.get('workoutid')) {
                  this.selectedClient.push(clientData[i])
                  console.log(this.selectedClient)
              } else {
                this.unselectedClient.push(clientData[i])
              }
            }
          }
        })
    })
    // this.clientSrevice.getMyClients(dataService.clientInfo.,)
    this.viewController.onDidDismiss(data => {
      // console.log('Dismissing')
    })
  }
  goBack() {
    this.viewController.dismiss().then(dismisData => {
      console.log(dismisData)
    })
  }
  unassign(item) {
    console.log(item);
    const arr = this.selectedClient.indexOf(item);
    console.log(arr)
     this.selectedClient.splice(arr,1)
     this.unselectedClient.push(item);
  }
  assign(item) {
    
    const arr = this.unselectedClient.indexOf(item);
    
    this.unselectedClient.splice(arr,1)
    this.selectedClient.push(item);
  }
  saveClients() {
    // Remove Workout To Client
    
    for(let i = 0; i < this.unselectedClient.length; i++) {
      
      this.clientSrevice.updateClientWorkout('',this.unselectedClient[i].id,this.authService.currentUserValue).take(1).subscribe(data => {
        if(data['message'] === "success") {
          // window.history.back();
          
        }
      })
    }


    // // Add Workout To Client
    for(let i = 0; i < this.selectedClient.length; i++) {
      
      this.clientSrevice.updateClientWorkout(this.navParam.get('workoutid'),this.selectedClient[i].id,this.authService.currentUserValue).take(1).subscribe(data => {
        if(data['message'] === "success") {
          // window.history.back();
          this.nativeService.generateToast('Workout Assigned Succesfully','','bottom');
        }
      })
    }
    
    
  }
}
