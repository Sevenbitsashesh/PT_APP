import { Component } from '@angular/core';
import { FoodProvider } from '../../providers/food/food';

@Component({
  selector: 'daypplans',
  templateUrl: 'daypplans.html'
})
export class DaypplansComponent {


  searchItems = [];
  foodBreakfast = [];
  foodMorningSnacks = [];
  foodLunch = [];
  foodNoonSnacks = [];
  foodEveSnacks = [];
  foodDinner = [];
  foodBefSleep = [];
  constructor(private foodService: FoodProvider) {
    
  }
  getItems(name) {
    // name = "45242685";
    if(name.target.value) {
      this.foodService.getFoodByName(name).subscribe(data => {
        
        this.searchItems = data['list']['item'];
        this.searchItems.slice()
      
    })
    }

      
  }
  clicked(event) {
    console.log(event);
  }
  addfoodBreakfast(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodBreakfast.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodMorningSnacks(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodMorningSnacks.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodLunch(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodLunch.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodNoonSnacks(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodNoonSnacks.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodEveSnacks(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodEveSnacks.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodDinner(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodDinner.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  addfoodBefSleep(ndbno) {
    
    this.foodService.getFoodNutrients(ndbno).subscribe(data => {
       this.foodBefSleep.push(data['report']['food']);
       console.log(data['report']['food']);
      })
  }
  removefoodBreakfast(ndbno) { 
    const index = this.foodBreakfast.indexOf(ndbno);
    this.foodBreakfast.splice(index,1);
  }
}
