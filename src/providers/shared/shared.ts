import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../../Models/users.details';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { appconfigs } from '../../Models/users_firestore';
import { Observable } from 'rxjs/Observable';
import { ToastController, ActionSheetController, LoadingController } from 'ionic-angular';
// import * as firebase from 'firebase/a';
import { getLocaleDateFormat, DatePipe } from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class SharedProvider {
  model: UserDetails;
  loggedUser: any;
  userscollection: AngularFirestoreCollection<UserDetails>;
  searchModel: UserDetails;
  smodel;
  verification;
  loading;
  constructor(public http: HttpClient, private router: Router, public db: AngularFirestore, private Toast: ToastController, private actionsheetCtrl: ActionSheetController, private loader: LoadingController, public firebaseAuth: AngularFireAuth) {
    // console.log('Hello SharedProvider Provider');
   this.userscollection = this.db.collection<UserDetails>(appconfigs.collection_users);
   this.loading = this.loader.create({
    content: 'Please wait..',
    duration: 5000,
    dismissOnPageChange: true
  });
  }
  addInfo(model) {
    console.log(model);
     this.userscollection.add(model);
    if (true ) {
      this.router.navigate(['/userhome']);
    }
  }
  // Profile data update of user by uid
  saveProfile(model, uid) {
    console.log(model, uid);
     this.db.doc<UserDetails>(`users/${uid}`).update(model).then(saved => {
      this.addFollow(uid);      
      this.router.navigate(['/userhome']);   
     })
      .catch(error => console.log(error));
  }
  // Adding Default Followers/Follwings Collection if not exist
  addFollow(uid) {
    this.db.collection('followers').ref.where('docid','==', uid).get().then(follow => {
      
      if(follow.size === 0) {
        this.db.collection('followers').add({docid: uid}).then(items => {
          this.db.collection('followings').ref.where('docid','==', uid).get().then(follow => {
            if(follow.size === 0) {
              this.db.collection('followings').add({docid: uid}).then(success => {                
              })
            }
        })
      })
      }
    })
  }
  getLogged() {
    // console.log('getlogged', localStorage.getItem('usermail'));
    return localStorage.getItem('usermail');
  }
  // Checking Login
  checkLogin() {
     

    if (localStorage.getItem('usermail') !== null ) {
      // setting login user
       this.loggedUser = this.getLogged();
        // this.loggedUser = this.loggedUser.toLowerCase();
       // this.router.navigateByUrl('/tabs/(home_tab:home_tab)');
       this.router.navigate(['/userhome']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  async callToast(msg) {
    const toast = await this.Toast.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    
  }
// ActionsheetController Global Service
present(buttons: Array<any>) {
  buttons.push({
      text: 'Cancel',
      role: 'cancel',
  });
let actionSheet = this.actionsheetCtrl.create({
      buttons: buttons
  });
actionSheet.present();
}
saveProfilePic(img: any, uid) {
  const promodel = {
   'profile_pic': img
  };
  this.db.collection('users').doc(`${uid}`).update(promodel).then(snap => {
    this.callToast('Profile Pic Updated');
    this.router.navigate(['#/userhome/tab_profile']);
  });
}
getTodayDate() {
  const pipe = new DatePipe('en-US');
  const now = Date.now();
  const today = pipe.transform(now, 'dd-MM-yyyy hh:mm:ss');
  // const today = getLocaleDateFormat(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US');
  return today;
}

verify() {
  // console.log('not ver');
    this.router.navigate(['verification']);
}
loaderCall() {  
 return this.loading.present();
}
loaderDismiss() {
this.loading.dismiss();
}
}
