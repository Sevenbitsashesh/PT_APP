import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../Models/api_url';
import { Observable } from 'rxjs';

@Injectable()
export class ClientProvider {

  constructor(public http: HttpClient) {

  }
  addClient(clientModel): Observable<any> {
    return this.http.post(API_URL, 'client/addclient',clientModel);
  }

}
