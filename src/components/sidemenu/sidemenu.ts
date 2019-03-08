import { Component } from '@angular/core';


@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {

  constructor() {

  }
  navHome() {
    document.getElementById("mySidenav").style.width = '0%';
  }
}
