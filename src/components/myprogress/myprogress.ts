import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { ClientProvider } from '../../providers/client/client';
import * as $ from "jquery";

@Component({
  selector: 'myprogress',
  templateUrl: 'myprogress.html'
})
export class MyprogressComponent implements OnInit {


  clientinfo = [];
  constructor(private dataService: DataProvider, private authService: AuthProvider, private clientService: ClientProvider) {
    this.dataService.userInfo.subscribe(client => {
      if(client.length > 0) {
        // console.log(client)
      this.getMyData(client);
      }        
    });
    

  }
  ngOnInit() {
    $(document).ready(function() {
      $(".progress-bar1").loading();
    }) 
   
  }
  getMyData(client) {

   

    this.clientService.getMyData(this.authService.currentUserValue,client[0].id)
    
    .subscribe(dataClient => {
      
      if(dataClient) {
        
        this.clientinfo = dataClient[0];
        console.log(this.clientinfo);
      }
       
      
    })
  }
}
