import { Component } from '@angular/core';
import { FoodProvider } from '../../providers/food/food';

@Component({
  selector: 'daypplans',
  templateUrl: 'daypplans.html'
})
export class DaypplansComponent {



  constructor(private foodService: FoodProvider) {
    
  }
  getItems(name) {
    name = "45242685";
      // this.foodService.getFoodByName(name).subscribe(data => {
        
      //   console.log(data);
      // })
      this.foodService.getFoodNutrients(name).subscribe(data => {
        console.log(data);
      })
  }

}
