import { Component, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoginComponent } from '../login/login';
import { HomePage } from '../../pages/home/home';
import { Router } from '@angular/router';
import { Slides} from 'ionic-angular';

@Component({
  selector: 'first',
  templateUrl: 'first.html'
})

@Injectable()
export class FirstComponent implements AfterViewInit {
  firsttime = "load";
   // @ViewChild('myNav') nav: NavController
   @ViewChild(Slides) slider: Slides;
  constructor(private route: Router) {
    if(localStorage.getItem('firsttime') == 'load') {
      this.route.navigate(['/login']);
    }
    
  }
  set() {
    localStorage.setItem('firsttime', this.firsttime);
      //  this.nav.push(LoginComponent);
      this.route.navigate(['/login']);
  }
  ngAfterViewInit() {
    this.slider.autoplay = 1000;
    this.slider.autoplayStopOnLast = true;
  }
}
