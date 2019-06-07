import { Component, AfterViewInit, OnChanges, ViewChild, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trainer-tab',
  templateUrl: 'trainertab.html'
})
export class TrainerTab implements AfterViewInit {
  currentTab;
  

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    
    
    
  }
  goto(event) {
     
     document.getElementById('client').classList.remove('activeTab');
     document.getElementById('workout').classList.remove('activeTab');
     
    const routeTo = event.target.id;
    
    if(routeTo === "exercise") {
      
      this.router.navigate(['userhome/tab_exercises']);
      // this.currentTab = 'tab_workouts';
    }
    else if(routeTo === "workout") {
      this.currentTab = 'tab_workouts';
      document.getElementById('workout').classList.add('activeTab');
      this.router.navigate(['userhome/tab_workouts']);
      
    }
    else if(routeTo === "mealplans") {
      
      this.router.navigate(['userhome/tab_mealplans']);
      
    }
    else if(routeTo === "schedule") {
      this.router.navigate(['userhome/tab_schedule']);
    }
    else if(routeTo === "profile") {
      this.router.navigate(['userhome/tab_profile']);
    }
    else if(routeTo === "client") {
      this.currentTab = 'tab_clients';
      document.getElementById('client').classList.add('activeTab');
      this.router.navigate(['userhome/tab_clients']);
     
    }
    
    var btns = document.getElementsByClassName('active');
    // console.log(btns.length);
    for(let item=0; item < btns.length; item++) {
      btns.item(item).classList.remove('active');      
    }
    
    this.currentTab = this.router.url.split('/')[2];
    // event.target.classList.add('active');
    // var btns = document.getElementsByClassName('spanTab');
    // document.getElementById('spanTab')    
  }
  ngAfterViewInit() {
    if(this.router.url.split('/')[2] === "tab_clients") {
      console.log('clie')
      document.getElementById('client').classList.add('activeTab');
    }
    else if(this.router.url.split('/')[2] === "tab_workouts")
    {
      console.log('work')
      document.getElementById('workout').classList.add('activeTab');
    }

  }
}
