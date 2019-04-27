import { Component, Input, AfterViewInit } from '@angular/core';
import { FoodProvider } from '../../providers/food/food';
import { debounce } from 'ionic-angular/umd/util/util';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { Observable } from 'rxjs';
export class FoodModel {
  foodid: String;
  foodname: String;
  nutrients: String;

}
@Component({
  selector: 'daypplans',
  templateUrl: 'daypplans.html'
})
export class DaypplansComponent implements AfterViewInit {


  searchItems = [];
  foodBreakfast = [];
  foodMorningSnacks = [];
  foodLunch = [];
  foodNoonSnacks = [];
  foodEveSnacks = [];
  foodDinner = [];
  foodBefSleep = [];
  totalBreakfastNutri: number = 0;
  constructor(private foodService: FoodProvider) {
    
  }
  ngAfterViewInit() {
    // const tar = document.getElementById('searchInput');    
    // const inptSearch =  Observable.fromEvent(tar,'keyup').map(x => x).debounceTime(1000).take(1);
    //     inptSearch.subscribe(data => this.getItem(data).subscribe(data => {
    //       this.foodBreakfast = data;
    //     }));
  }
  doInfinite(infiniteScroll) {

  }
  getItems(name) {
    // name = "45242685";
    console.log(name.target.value);
    
    if(name.target.value) {
      this.foodService.getFoodByName(name).subscribe(foodData => {
        console.log(foodData['parsed'].length);
        if(foodData['parsed'].length > 0) {
          this.searchItems = foodData['parsed'];          
        }
        else {
          this.searchItems = [];
        }
        
        
        
      });

        }    
  }
  
  clicked(event) {
    console.log(event);
  }
  addfoodBreakfast(food) {
    
    // this.foodService.getFoodNutrients(food).subscribe(data => {
       this.foodBreakfast.push(food);
       console.log(this.foodBreakfast);
       this.totalBreakfastNutri = (this.totalBreakfastNutri + food.nutrients.ENERC_KCAL);
       console.log(this.totalBreakfastNutri);
      // })
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
