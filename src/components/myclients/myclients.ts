import { Component, Input, AfterViewChecked, AfterContentInit, AfterViewInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { ClientProvider } from '../../providers/client/client';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'myclients',
  templateUrl: 'myclients.html'
})
export class MyclientsComponent implements AfterViewInit {

@Input() currentUser;
  myclients;
  constructor(private dataService: DataProvider,private userService: UserProvider, private clientService: ClientProvider, private authService: AuthProvider) {
    this.getMyClients();
  }
  getMyClients() {

    this.dataService.userInfoObs.subscribe(da => {
      console.log(da);
      this.clientService.getMyClients(da).subscribe(clientsData => {
        console.log(clientsData);
      })
    })
  
  
    
  }
  ngAfterViewInit() {
    console.log(this.currentUser);
  }
}
