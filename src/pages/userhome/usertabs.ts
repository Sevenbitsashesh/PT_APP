import { Component, Injectable, AfterViewInit, ElementRef } from '@angular/core';
import { HometabComponent } from '../../components/hometab/hometab';
import { Router } from '@angular/router';
import { SharedProvider } from '../../providers/shared/shared';
import { DataProvider } from '../../providers/data/data';
declare var Swiper: any;

@Component({
  selector: 'usertabs',
  templateUrl: 'usertabs.html'
})
@Injectable()
export class UsertabsComponent implements AfterViewInit {
  constructor(private dataService: DataProvider, private elementRef: ElementRef) {
    // console.log('Hello UsertabsComponent Component');          
    //  dataService.changeUserID(localStorage.getItem('swaGuid'));
    
  }
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div style="height: 50px; width: 20%;" style="" class="' + className + '">' + '<img src="../../assets/imgs/logo.png" style="height: 50px; width: 100%;"/>'+ '</div>';
        },
      },
    })
  }
}
