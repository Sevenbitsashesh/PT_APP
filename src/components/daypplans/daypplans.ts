import { Component, Input, AfterViewInit } from '@angular/core';
import { FoodProvider } from '../../providers/food/food';
import { debounce } from 'ionic-angular/umd/util/util';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { Observable } from 'rxjs';

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
  constructor(private foodService: FoodProvider) {
    
  }
  ngAfterViewInit() {
    const tar = document.getElementById('searchInput');
    
    const inptSearch =  Observable.fromEvent(tar,'keyup').map(x => x).debounceTime(1000).take(1);
        inptSearch.subscribe(data => this.getItem(data));
  }
  doInfinite(infiniteScroll) {

  }
  getItems(name) {
    // name = "45242685";
    
    
    // if(name.target.value) {
      

        // }    
  }
  getItem(name) {
    
    this.foodService.getFoodByName(name).subscribe(data => {
    
      // this.searchItems = data['list']['item'];
      // this.searchItems.slice()
      this.searchItems = data['parsed'];
      console.log(this.searchItems);
  })
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
