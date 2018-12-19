import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserDetails } from 'src/Models/users.details';
import { SharedProvider } from '../shared/shared';


@Injectable()
export class UseractivityProvider {
  model;
  loggeduser;
  usercollection;
  usersDoc: AngularFirestoreDocument<UserDetails>;
  constructor(public http: HttpClient, private sharedProvider: SharedProvider) {
    console.log('Hello UseractivityProvider Provider');
  }

}
