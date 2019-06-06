import { Component, Injectable, AfterViewInit, ElementRef, Input } from '@angular/core';
import { HometabComponent } from '../../components/hometab/hometab';
import { Router } from '@angular/router';
import { SharedProvider } from '../../providers/shared/shared';
import { DataProvider } from '../../providers/data/data';

import { UserInfo } from '../../Models/users_info';
declare var Swiper: any;

@Component({
  selector: 'trainertabs',
  templateUrl: 'trainertabs.html'
})
@Injectable()
export class TrainertabsComponent implements AfterViewInit {
  workoutRoute = 'TabworkoutsPage';
  constructor(private elementRef: ElementRef) {
    // console.log('Hello UsertabsComponent Component');          
    //  dataService.changeUserID(localStorage.getItem('swaGuid'));
    
  }
  ngAfterViewInit(){
    
    // const swiper = new Swiper('.swiper-container', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<div style="height: 50px; width: 20%;" style="" class="' + className + '">' + '<img src="../../assets/imgs/logo.png" style="height: 50px; width: 100%;"/>'+ '</div>';
    //     },
    //   },
    // })
  }
}
