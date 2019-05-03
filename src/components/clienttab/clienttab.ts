import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'client-tab',
  templateUrl: 'clienttab.html'
})
export class ClientTab {

  constructor(private router: Router) {
    
  }
  goto(event) {
    
    const routeTo = event.target.id;
    console.log(routeTo);
    if(routeTo === "client_progress") {
      this.router.navigate(['userhome/client_progress']);
    }
    else if(routeTo === "client_schedule") {
      this.router.navigate(['userhome/client_schedule']);
    }
    else if(routeTo === "client_meal") {
      this.router.navigate(['userhome/client_meal']);
    }
    else if(routeTo === "client_profile") {
      this.router.navigate(['userhome/client_profile']);
    }
    var btns = document.getElementsByClassName('active');
    // console.log(btns.length);
    for(let item=0; item < btns.length; item++) {
      btns.item(item).classList.remove('active');      
    }
    event.target.classList.add('active');
    // var btns = document.getElementsByClassName('spanTab');
    // document.getElementById('spanTab')    
  }
}
