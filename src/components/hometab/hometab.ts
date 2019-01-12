import { Component } from '@angular/core';


/**
 * Generated class for the HometabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hometab',
  templateUrl: 'hometab.html'
})
export class HometabComponent {


  constructor() {
    console.log('Hello HometabComponent Component');
  }
  gotoHome(event) {
    var btns = document.getElementsByClassName('active');
    console.log(btns.length);
    for(let item=0; item < btns.length; item++) {
      btns.item(item).classList.remove('active');
      
    }
    event.target.classList.add('active');
    // var btns = document.getElementsByClassName('spanTab');
    // document.getElementById('spanTab')    
  }
}
