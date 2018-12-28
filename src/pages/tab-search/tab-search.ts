import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { Router } from '@angular/router';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-tab-search',
  templateUrl: 'tab-search.html',
})
export class TabSearchPage {
  userid;
  u: any[];
  search = [];
  search_content: string;
  constructor(private uactivity : UseractivityProvider, private route: Router, private dataService: DataProvider) {
    this.u = uactivity.getAllUsers();
    console.log('user coll: ',this.u);
  }

  onInput() {
    console.log('searching', this.search_content.toLowerCase());
     this.search = [];
     this.u.forEach(i => {
       // const searching: string = i.userid;
      if ( this.search_content !== '' && i.userid.toLowerCase().indexOf(this.search_content.toLowerCase()) > -1) {
        this.search.push(i);
      }
     });
     console.log('searched: ', this.search);
   }
   gotoSearch(userid) {
     this.dataService.changeSearchID(userid);
      window.location.href = "#/userhome/tab_search/userprofile/{user.userid}";
   }
}
