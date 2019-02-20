import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { appconfigs } from '../../Models/users_firestore';
import { FollowingModel } from '../../Models/users_info';



@Injectable()
export class RefProvider {

  constructor(public http: HttpClient, private shared: SharedProvider) {
    
  }

}
