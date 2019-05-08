import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../Models/api_url';
import { Observable } from 'rxjs';


@Injectable()
export class ClientProvider {
  header = new HttpHeaders();
  constructor(public http: HttpClient) {
    
        this.header.append("Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWE3YTg5ZmI2ZmMwNmY0ZjU2ODBiMyIsImVtYWlsIjoicGFzaGVzaEBnbWFpbC5jb20iLCJleHAiOjE1NTU0MjE3MzgsImlhdCI6MTU1NDgxNjkzOH0.bPDtErUgzgUtBVZ-5mYG2Re6jghQ7P3Ie2LFk5x-wqI")
        
  }
  addClient(clientModel,user): Observable<any> {
    
    console.log(clientModel);
    return this.http.post(API_URL+'client/addclient',clientModel, {headers: {"Content-Type": "application/json","Accept": "application/json","Authorization": "Bearer "+user.token}});
  }
  getMyClients(authdetail,user): Observable<any> {

    console.log(authdetail)
    return this.http.post(API_URL+'client/myclients',{trainerid: authdetail[0].userid},{headers : {  'Accept' : 'application/json',
    'Content-Type' : 'application/json','Authorization': 'Bearer '+ user.token}});
  } 
  getClient(authdetail,user,uid) {
         return this.http.post(API_URL+'client/getclient',{clientid: uid, trainerid: authdetail.userid},{headers: {"Authorization": 'Bearer '+user.token}});
  }
  updateAssessment(assessModel,clientid,user) {
    return this.http.post(API_URL+'client/updateassessment',{assessModel, id: clientid},{headers: {"Content-Type": "application/json", "Accept": "application", "Authorization": "Bearer "+user.token}}) 
  }


  // Client Services

  getMyData(authdetail, clientinfoid) {
    console.log(clientinfoid)
    return this.http.post(API_URL+'client/getmydata',{clientinfoid: clientinfoid},{headers: {"Content-Type": "application/json", "Accept": "application", "Authorization": "Bearer "+authdetail.token}})
  }
}
