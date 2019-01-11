import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedProvider } from '../shared/shared';
import { RefProvider } from '../ref/ref';
import { DataProvider } from '../data/data';
import { appconfigs } from '../../Models/users_firestore';
import { UserDetails } from '../../Models/users.details';


@Injectable()
export class UserfollowProvider {
  userid;
  userModel: UserDetails[];
  flrs;
  flwings;
  constructor(public http: HttpClient, private sharedService: SharedProvider, private refService: RefProvider, private dataService: DataProvider) {
    dataService.searchUser.subscribe(userid => {
      this.userid = userid;
    });
    this.dataService.userModelObs.subscribe(userDetail => {
      this.userModel = [];
      userDetail.forEach(i =>{ 
        this.userModel.push(i);
        console.log(this.userModel);        
      });
      
    });
    
  }
  getFollow() {
    this.refService.getRefByUid(this.userid).get().then(doc => {
      doc.forEach(userdoc => {
        
        this.refService.getFlwings(userdoc.id)
        .get().then(data => {
          data.forEach(flwings => {
            this.refService.getRefFlw(flwings.id,'followings')
            .subscribe(followings => {
              this.userModel[0].followings = followings;
              
              this.dataService.changeUserModel(this.userModel);
            });
          })
        });
        this.refService.getFlrs(userdoc.id)
        .get().then(data2 => {
          data2.forEach(flwrs => {
            this.refService.getRefFlw(flwrs.id,'followers')
            .subscribe(followers => {
              this.userModel[0].followers = followers;
              this.dataService.changeUserModel(this.userModel);
            })
          })
        });        
      })       
    });
  }
}
