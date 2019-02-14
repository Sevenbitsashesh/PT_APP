// hear
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL,LOCAL_API_URL } from '../../Models/api_url';


@Injectable()
export class AuthProvider {
  
  constructor(private router: Router, private http: HttpClient) {
    this.checkLogin();
    
  }
  signInEmail(email,pass) {
    
    console.log(email,pass);
    //localapi call
    this.http.post( LOCAL_API_URL+'users/authenticate',{email: email, password: pass},{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).subscribe(suc => {      
      console.log(suc);      
    });      
       
  }
  signUp(model) {
    this.http.post('http://api.veridoceducation.com/api/register',model,{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).subscribe(suc => {
      localStorage.setItem('swaToken',suc['success']['token']);
      this.signInEmail(model.email,model.password);
    });      
  }
  
  
  checkLogin() {
  //   const token = localStorage.getItem('swaToken');
  //   const guid = localStorage.getItem('swaGuid');
    
  //  if(token !== undefined && guid !== undefined) {
  //   this.getDetails(token,guid);
  //  }
    this.http.get(LOCAL_API_URL+ '',{headers: {'Content-Type': 'application/json','Accept': 'application/json'}});

    
  }
  getDetails(token,guid) {
    console.log(token,guid);
    this.http.post('http://api.veridoceducation.com/api/GetUserDetail',{'PublicGuid': guid},{headers: {'Content-Type': ' application/json','Accept': 'application/json',  'Authorization' : `Bearer `+token }}).subscribe(suc => {
      this.router.navigate(['/userhome']);
      });    
  }
}
