import { Component } from '@angular/core';


@Component({
  selector: 'trainerhome',
  templateUrl: 'trainerhome.html'
})
export class TrainerhomeComponent {
  constructor() {

  }
  swipeEvent($event) {
    console.log($event.deltaX+", "+$event.deltaY);
    $event.deltaX 
  }
}
