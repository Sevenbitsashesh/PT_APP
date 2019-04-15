import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../Models/api_url';
import { Observable } from 'rxjs';


@Injectable()
export class ClientProvider {

  constructor(public http: HttpClient) {
        
  }
  addClient(clientModel): Observable<any> {
    const header = new HttpHeaders();
    console.log(clientModel);
    header.append("Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWE3YTg5ZmI2ZmMwNmY0ZjU2ODBiMyIsImVtYWlsIjoicGFzaGVzaEBnbWFpbC5jb20iLCJleHAiOjE1NTU0MjE3MzgsImlhdCI6MTU1NDgxNjkzOH0.bPDtErUgzgUtBVZ-5mYG2Re6jghQ7P3Ie2LFk5x-wqI");
    return this.http.post(API_URL+'client/addclient',clientModel, {headers: header});
  }
  getMyClients(authdetail): Observable<any> {
    const header = new HttpHeaders();
    console.log(authdetail)
    // header.append("Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWE3YTg5ZmI2ZmMwNmY0ZjU2ODBiMyIsImVtYWlsIjoicGFzaGVzaEBnbWFpbC5jb20iLCJleHAiOjE1NTU0MjE3MzgsImlhdCI6MTU1NDgxNjkzOH0.bPDtErUgzgUtBVZ-5mYG2Re6jghQ7P3Ie2LFk5x-wqI");
    return this.http.post(API_URL+'client/myclients',{trainerid: authdetail.id},{headers: header})
  }
}
