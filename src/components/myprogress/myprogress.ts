import { Component, AfterViewInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { ClientProvider } from '../../providers/client/client';


@Component({
  selector: 'myprogress',
  templateUrl: 'myprogress.html'
})
export class MyprogressComponent implements AfterViewInit {


  clientinfo = [];
  constructor(private dataService: DataProvider, private authService: AuthProvider, private clientService: ClientProvider) {
    this.dataService.userInfo.subscribe(client => {
      if(client.length > 0) {
        // console.log(client)
      this.getMyData(client);
      }
        
    })
  }
  ngAfterViewInit() {
    
  }
  getMyData(client) {
   
    this.clientService.getMyData(this.authService.currentUserValue,client[0].id)
    
    .subscribe(dataClient => {
      
      if(dataClient) {
        
        this.clientinfo = dataClient[0];
        
      }
       
      
    })
  }
}
