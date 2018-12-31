import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';


@Injectable()
export class FollowProvider {
  loggedUid;
  userid;
  constructor(public http: HttpClient, private shared: SharedProvider, private dataService: DataProvider) {
    //Logged user from data provider
    this.dataService.loggedUId.subscribe(data => {  
      this.loggedUid = data;
    });

    //Requests and Requested 
    this.dataService.searchUser.subscribe(data => {
    this.userid = data;
  });

}
}