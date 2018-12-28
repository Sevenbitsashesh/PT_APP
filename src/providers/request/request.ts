import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { RequestModel } from 'src/Models/request_model';
import { SharedProvider } from '../shared/shared';


@Injectable()
export class RequestProvider {
request_ref;
  constructor(public http: HttpClient, private afs: AngularFirestore, private sharedService: SharedProvider) {
    sharedService.userscollection.doc('requested').valueChanges().subscribe(data => {
      console.log(data);
    });
  }

}
