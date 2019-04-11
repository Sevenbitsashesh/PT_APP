import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClientProvider {

  constructor(public http: HttpClient) {

  }
  // getAllClient(): Observable<any> {
  //   // return this.http()
  // }
}
