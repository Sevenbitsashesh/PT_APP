import { Component } from '@angular/core';


@Component({
  selector: 'newmealplans',
  templateUrl: 'newmealplans.html'
})
export class NewmealplansComponent {



  constructor() {

  }
  createMeal() {
    
  }
  newMealBack() {
    window.history.back();
  }
}
