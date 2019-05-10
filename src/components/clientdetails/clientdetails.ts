import { Component, AfterViewInit, AfterViewChecked, AfterContentInit, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ClientProvider } from '../../providers/client/client';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
import { NativeProvider } from '../../providers/native/native';


@Component({
  selector: 'clientdetails',
  templateUrl: 'clientdetails.html'
})
export class ClientdetailsComponent implements OnInit {

  
  userMeasure = [];
  clientInfo = [];
  constructor(private route: ActivatedRoute,private dataService: DataProvider, private clientService: ClientProvider, private authService: AuthProvider, private nativeService: NativeProvider) {
   
    
  }
  ngOnInit() {
    this.dataService.userInfoObs.subscribe(da => {
      this.route.queryParams.subscribe(d => { 
        
        this.clientService.getClient(da[0],this.authService.currentUserValue,d.client).subscribe(client => {
          console.log(client)
          if(client[0]['client_measurement'].length > 0) {
            console.log('in');
            this.userMeasure = client[0]['client_measurement'][0];
            this.clientInfo = client[0];
          }
            
            
        })
      })
    })
  }
  generateAssessment() {
    console.log(this.userMeasure);
    this.route.queryParams.subscribe(dataClient => {
      
      this.clientService.updateAssessment(this.userMeasure,dataClient.client,this.authService.currentUserValue).subscribe(asseData => {
        if(asseData['message'] == "success") {
            this.nativeService.generateToast('Assessment Completed','','bottom');
        }
      })
    })
    
  }
  changeClientGoal(clientGoal,clientid) {
    console.log(clientGoal);
    this.clientService.updateClientGoal(clientGoal,clientid,this.authService.currentUserValue).subscribe(goalData => {
      if(goalData['message'] == "success") {
        this.nativeService.generateToast('Goal Upgraded','','bottom');
      }
    })
  }
  goBack() {
    window.history.back();
  }
}
