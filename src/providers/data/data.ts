import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private searchSource = new BehaviorSubject('');
  
  searchUser = this.searchSource.asObservable();
  
  constructor(public http: HttpClient) {
  }
  changeSearchID(userid: string) {
    this.searchSource.next(userid)
  }

}
