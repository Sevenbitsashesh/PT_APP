import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../../Models/users.details';
import { SharedProvider } from '../shared/shared';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private searchSource = new BehaviorSubject('');
  searchUser = this.searchSource.asObservable();
  private loggedUserId = new BehaviorSubject('');
  loggedUId = this.loggedUserId.asObservable();
  private imageUrl = new BehaviorSubject('');
  imageUrlObs = this.imageUrl.asObservable();
  constructor(public http: HttpClient, private shared: SharedProvider) {
  }
  changeSearchID(userid: string) {
    this.searchSource.next(userid);
  }
  changeUserID(loggedUserId: string) {
    this.loggedUserId.next(loggedUserId);
  }
  changeImageData(imageUrl: string) {
    this.imageUrl.next(imageUrl);
  }
  //Search By Userid Observable 
  getSearchUserModel(userid) : Observable<UserDetails[]> {
    return this.shared.db.collection<UserDetails>('users', ref => ref.where('userid', '==', userid)).valueChanges();
   }
   
  

   
  
}
