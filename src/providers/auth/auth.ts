import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,private fauth: AngularFireAuth) {
    console.log(fauth.auth.currentUser.email);
  }

}
