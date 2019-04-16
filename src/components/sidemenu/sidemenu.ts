import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {
  @Input() currentUser;
  constructor(private router: Router) {
    
  }
  navHome() {
    this.router.navigate(['tab_exercises/myclients']);
    document.getElementById("mySidenav").style.width = '0%';
  }
}
