import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'clientdetails',
  templateUrl: 'clientdetails.html'
})
export class ClientdetailsComponent {

  

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(d => { 
      console.log(d);
    })
  }

}
