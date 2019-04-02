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
  private swipeCoord?: [number, number];
private swipeTime?: number;
swipe(e: TouchEvent, when: string) {
  const coord: [number, number] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
  const time = new Date().getTime();
  
  if (when === 'start') {
    this.swipeCoord = coord;
    this.swipeTime = time;
  } else if (when === 'end') {
    const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
    const duration = time - this.swipeTime;

    if (duration < 1000 //
      && Math.abs(direction[0]) > 30 // Long enough
      && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        // Do whatever you want with swipe
        console.log('called ',swipe);
    }
  }
}
}
