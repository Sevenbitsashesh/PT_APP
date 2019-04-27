import { Component, Input, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ClientProvider } from '../../providers/client/client';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { delay } from 'rxjs/operators';
import { ClientModel } from '../../Models/client.model';
import { NavController } from 'ionic-angular';
import { ClientdetailsComponent } from '../../components/clientdetails/clientdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'myclients',
  templateUrl: 'myclients.html'
})
export class MyclientsComponent implements AfterViewInit {

@Input() currentUser;
  myclients = [];
  
  constructor(private dataService: DataProvider,private userService: UserProvider, private clientService: ClientProvider, private authService: AuthProvider, private router: Router) {
    // this.getMyClients();
    
  }
  getMyClients() {
    
    this.dataService.userInfoObs.subscribe(da => {
      // delay(3000);
      if(da.length > 0) {
        this.clientService.getMyClients(da,this.authService.currentUserValue).subscribe(clientsData => {
          if(clientsData.length > 0) {
            this.myclients = clientsData;
            console.log(clientsData);
          }
          
        });
      }
      
    })
  }
  getItems(event) {
    const da = event.target.value;    
    let searchItem = da;
    if(searchItem) {
      console.log(searchItem);
    }
  }
  gotoDetails(client) {
    console.log('call')
    
    this.router.navigate(['/userhome/tab_exercises/clientdetails'],{queryParams: {client: client}});
  }
  ngAfterViewInit() {
    this.getMyClients();
    // console.log(this.currentUser);
  }
  setBack(event,index) {
    if(index%2 === 0) {
      return true;
    }
    else { 
      return false;
    }
  }
  
}