import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hometab',
  templateUrl: 'hometab.html'
})
export class HometabComponent {
  
  constructor(private router: Router) {
    // console.log('Hello HometabComponent Component');
    
  }
  gotoHome(event) {
    var btns = document.getElementsByClassName('active');
    // console.log(btns.length);
    for(let item=0; item < btns.length; item++) {
      btns.item(item).classList.remove('active');
      
    }
    event.target.classList.add('active');
    // var btns = document.getElementsByClassName('spanTab');
    // document.getElementById('spanTab')    
  }
  routeTo() {
    this.router.navigate(['/tab_exercises']);
  }
}
