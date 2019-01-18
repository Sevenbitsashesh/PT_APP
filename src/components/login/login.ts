import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, Header } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SharedProvider } from '../../providers/shared/shared';
import { Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginComponent {

  credentialsForm: FormGroup;
 // ref = firebase.database().ref('users/').push();
  email: string;
  pass: string;
  message: string;
  loginForm: FormGroup;
  model: any;
  
  constructor(public router: Router,private formBuilder: FormBuilder, private loadingController: LoadingController, private fireAuth: AngularFireAuth, private sharedService: SharedProvider, private http: HttpClient) {
    sharedService.checkLogin();
//     let head= new HttpHeaders();
    


//     head.append('Accept','application/json');
//     // head.append('content-type','application/json');
//     // head.append('Access-Control-Allow-Origin' , '*');
//     // head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//     // head.append('Access-Control-Allow-Credentials','true');
    
//     head.append("Access-Control-Allow-Methods","GET, POST");
// // head.append("Access-Control-Allow-Origin","*");
// head.append('Content-Type' , 'application/x-www-form-urlencoded');
// head.append('Authorization' , 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY0OGMxMDYwNTNmMjgwNjZiMTgxOTJkNjE0MzJiYjQxNjA5Mjk0ZjVmNmI1ZjMxY2Q4ZmVkZjcyZWJhNDJiNjcwZTA3Y2RkZWE1Mjk1NmVkIn0.eyJhdWQiOiIxIiwianRpIjoiNjQ4YzEwNjA1M2YyODA2NmIxODE5MmQ2MTQzMmJiNDE2MDkyOTRmNWY2YjVmMzFjZDhmZWRmNzJlYmE0MmI2NzBlMDdjZGRlYTUyOTU2ZWQiLCJpYXQiOjE1NDc3MTg1MjcsIm5iZiI6MTU0NzcxODUyNywiZXhwIjoxNTc5MjU0NTI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dyQN4YnHvL5LF99axlj4lMu042U_rdeJJFr6bWLtx9AMwTBm9KfS1LdIdDuPzeP01QE2wshhJiBqr4NDP9hPPCA-yXjj_GA7-NczaeaCwgvG9lpWajaipWV0fH0J3F3pXYGHs_bvO7aZnWAYi-1nncUXn2q1Svelvgr-tJkk_S9IAn8bcU_aEkHhoHH8ER_c49kDPRxvne_sf_kVQlqD-mqBLRnxP-5x2uKQB1Fj7Ki04fhF8H8YYt7_ZnpbQZUSRPcaNH5PYFem9CFDKZNjocCaa1NYm-bDyb5GteS-CY8JdDS1lHEDB06tFTvoZGndhy2KtfL8Ej385yB_Jel3BQFrdjwIRpPJaAsbpIunxRzPeKp34V85w3Dw0yqdpRs2tNqFUJpTKgRwF4vUkl3VE0BaYYA3j9aPcLAmRDGlY8CQhhuOSYOALTfdFbIaA1yV0MHRLCfKpKZJgqaGeSbobWoN_93NVoKU3IgdpNyLLsOZV3XE-GOdPfLHuiQRCSssXTvwgJ5HZESwBN4WClunFzXzJuEeVyT2bfo3Ek_b0PhiD8HlFu2STGPEQKgu9W4kZSBWZMhiaWZ5Jt477ClX9-KLaun36WLd0BZujRHLZ4sysgbnsHELi0iz4-oTJLu8NFhnRiF4-d3el3jaBb5Av_dGGLjc34m4UoKrO-a-cW4')

//     // http.post('http://api.veridoceducation.com/api/login',{"email": "bhadania.sunny@tristonsoft.com","password": "123456"},{headers: head}).subscribe(data => {
//     //   console.log(data);
//     // })
//     http.post('http://api.veridoceducation.com/api/details',{headers: head}).subscribe(data => {
//       console.log(data);
//     })
    
  }
  


// Create user in firebase Authentication
createAcc() {
  const model = {
    'email': this.loginForm.get('email').value,
    'pass': this.loginForm.get('pass').value,
    'userid': this.loginForm.get('email').value
  };
  this.fireAuth.auth.createUserWithEmailAndPassword(model.email , model.pass).then(user => {
    // this.createUser(model.email , model.pass);
    this.createUser(model);
    // this.createUid();
    // this.getLogin();
  },
  err => { this.message = err;  throw err;  }
  );

}
  // create user in Firestore
  createUser(model) {
    const user = {
      email: model.email,
      userid: model.userid,
      profile_pic: 'https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt'
      + '=media&token=04d24821-a4ab-4a03-915c-dd97a6ca2a26'
    };
     this.sharedService.addInfo(user);
  }
}
