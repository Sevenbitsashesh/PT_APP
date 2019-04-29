import { Component, AfterViewInit, AfterViewChecked, AfterContentInit, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ClientProvider } from '../../providers/client/client';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';


@Component({
  selector: 'clientdetails',
  templateUrl: 'clientdetails.html'
})
export class ClientdetailsComponent implements OnInit {

  
  userMeasure = [];
  constructor(private route: ActivatedRoute,private dataService: DataProvider, private clientService: ClientProvider, private authService: AuthProvider) {
   
    
  }
  ngOnInit() {
    this.dataService.userInfoObs.subscribe(da => {
      this.route.queryParams.subscribe(d => { 
        
        this.clientService.getClient(da[0],this.authService.currentUserValue,d.client).subscribe(client => {
          console.log(client)
          if(client[0]['client_measurement'].length > 0) {
            console.log('in');
            this.userMeasure = client[0]['client_measurement'][0];
          }
            
            
        })
      })
    })
  }

}
