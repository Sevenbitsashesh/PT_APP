import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { UseractivityProvider } from '../useractivity/useractivity';
import { DataProvider } from '../data/data';

@Injectable()
export class LikeProvider {
  userid;
  constructor(public http: HttpClient, private shared: SharedProvider, private uactivity: UseractivityProvider, private dataService: DataProvider) {
    dataService.searchUser.subscribe(user => {
      this.userid = user;
    });
  //  shared.db.collection('liked').ref.where('user','==',this.userid).
  }

}
