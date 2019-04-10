import { Component, AfterViewInit } from '@angular/core';
import { delay } from 'rxjs/operator/delay';
import { Observable } from 'rxjs';
import * as anime from 'animejs'; 
import { NativeProvider } from '../../providers/native/native';
declare var Swiper: any;
@Component({
  selector: 'newworkout',
  templateUrl: 'newworkout.html'
})
export class NewworkoutComponent  implements AfterViewInit{

  days = ['MON','TUE','WED','THUR','FRI','SAT','SUN'];
  exerciseSelect: boolean;
  item1 = [];
  swiper;
  exe_image = "../../assets/imgs/attach-img.svg";
  constructor(private nativeService: NativeProvider) {
   
  }
   ngAfterViewInit() {
    //  console.log(swiper.Swiper);
    // this.swiper = new Swiper('.swiper-container', {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }
    // }); 
   
   }
  newWorkoutBack() {
    window.history.back();
  }
  tagClick1(event) {
    var items = Array.from(document.querySelectorAll('.color-tag')).forEach(items => {
      items.classList.remove('shadow-tag-color1');
    })
    // for(var i; i <items.length;i++) {
    //   console.log(i);
    //   items.item(i).classList.remove('shadow-tag-color1');      
    // }
    document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
    // console.log(items);
    
    
    // document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
  }
  clickDay(dayControl) {
    var idDay = dayControl.target.id;
    
    if(idDay.split('_')[1] === "MON") {
      // this.item1 = ['SQUAT','LEG Extention'];
          this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "TUE") {
      // this.item1 = ['Dumbbell Lunges','Burpee', 'Barbel Lunge'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "WED") {
      // this.item1 = ['Abs Scrunch','Trap Bar Deadlift', 'Barbel Push Up'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "THUR") {
      // this.item1 = ['Abs Scrunch','Trap Bar Deadlift'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "FRI") {
      // this.item1 = ['Trap Bar Deadlift'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "SAT") {
      // this.item1 = ['Barbel Push Up'];
      this.exerciseSelect = true;
    }
    else if(idDay.split('_')[1] === "SUN") {
      // this.item1 = [];
      this.exerciseSelect = true;
    }
    Array.from(document.querySelectorAll('.single-day')).forEach(items => {
      items.classList.remove('single-day-selected');
    })
    document.getElementById(dayControl.target.id).classList.add('single-day-selected');
    
  }
  selectExe(control) {
    this.item1.push(control.target.id);
    console.log(this.item1);
  }
  newWorkoutCreate() {
    this.nativeService.generateToast('New Workout Created','css');
    window.history.back();
  }
  removeItem(event) {
    
    const items = event.target.id.split('_');
    const index = this.item1.indexOf(items[1]+'_'+items[2]);
    this.item1.splice(index,index);
    console.log(index);
  }
}
