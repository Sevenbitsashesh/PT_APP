import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../Models/api_url';


@Injectable()
export class MailProvider {
  header = new HttpHeaders();
  constructor(public http: HttpClient) {
    
    
  }
  sendMail(message, sender, recepeint,auth) {
    this.header.append('Authorization', 'Bearer '+auth.token);
    console.log(message, sender, recepeint,auth.token);
    return this.http.post(API_URL+'mail/sendmail',{message,sender,recepeint},{headers: {'Authorization': 'Bearer '+auth.token}});
  } 
}
