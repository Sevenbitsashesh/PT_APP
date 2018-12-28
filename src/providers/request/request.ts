import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { DataProvider } from '../data/data';



@Injectable()
export class RequestProvider {
  userid;
  request_ref;
  userDocID;
  constructor(public http: HttpClient, private shared: SharedProvider, private dataService: DataProvider) {
    this.dataService.searchUser.subscribe(data => {
    this.userid = data;

    this.dataService.getAllDataDocument(data);
    this.dataService.uDocID.subscribe(docid => this.userDocID = data);
    });
    this.getRequests();
  }
  getRequests() {
    console.log('mydocid', this.userDocID);
    // this.dataService.getRequests(this.userDocID);
  }
}
