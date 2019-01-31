import { Component, Injectable } from '@angular/core';
import { HometabComponent } from '../../components/hometab/hometab';
import { Router } from '@angular/router';
import { SharedProvider } from '../../providers/shared/shared';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';

@Component({
  selector: 'usertabs',
  templateUrl: 'usertabs.html'
})
@Injectable()
export class UsertabsComponent {
  constructor(private dataService: DataProvider) {
    // console.log('Hello UsertabsComponent Component');          
     dataService.changeUserID(localStorage.getItem('usermail'));
  }
}