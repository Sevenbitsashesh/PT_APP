import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import $ from 'jquery';
import * as  moment from 'moment/moment';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { ClientProvider } from '../../providers/client/client';
import { Observable } from 'rxjs';

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}
@Component({
  selector: 'viewschedule',
  templateUrl: 'viewschedule.html'
})
export class ViewscheduleComponent implements OnInit, OnChanges {

  
  currentDate = moment();
  dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];  
  @Input() selectedDates: CalendarDate[] = [];
  @Output() onSelectDate = new EventEmitter<CalendarDate>();
  clientinfo = [];
  schedules: Observable<any>;
  scheduleWork = [];
  selectedWorkout;
  
  constructor(private workoutService: WorkoutProvider, private dataService: DataProvider, private authService: AuthProvider, private clientService: ClientProvider) {
    this.currentDate = moment();
    
    
    this.dataService.userInfo.subscribe(client => {
      if(client.length > 0) {
        // console.log(client)
      this.getMyData(client);
      }
        
    })
  }
  getMyData(client) {
   
    this.clientService.getMyData(this.authService.currentUserValue,client[0].id)
    
    .subscribe(dataClient => {
      
      if(dataClient) {
        
        this.clientinfo = dataClient[0];
        
    this.workoutService.getMyWorkoutPlan(this.dataService.u.userid,this.authService.currentUserValue,dataClient[0].client_workplan[0].workout_planid).subscribe(myWorkout => {
      // dataClient[0].startFrom
      
    
   this.schedules =  new Observable(observer => {
      observer.next({myWorkout, clientinfo: this.clientinfo});
      
      observer.complete();  
    });
    this.schedules.subscribe(data => {
      
      this.scheduleWork = [];
   // console.log(data.clientinfo.client_workplan[0].weeks * 7)  ;
      let exe;
      

     for(let i = 0; i < data.clientinfo.client_workplan[0].weeks * 7; i++) {
       let start = moment(data.clientinfo.startFrom.split('T')[0]);        
       let nextDay = start.add(i,'days').format('dddd');        
       let nextDate = start.format('YYYY-MM-DD')
       
       if(nextDay === 'Monday') {
         
        this.scheduleWork.push({
          date: nextDate,
          data: data.myWorkout.work_days[0].MON
        })    
       }
       else if(nextDay === 'Tuesday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[1].TUE
         })      
       }
       else if(nextDay === 'Wednesday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[2].WED
         })      
       }
       else if(nextDay === 'Thursday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[3].THUR
         })      
       }
       else if(nextDay === 'Friday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[4].FRI
         })      
       }
       else if(nextDay === 'Saturday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[5].SAT
         })      
       }
       else if(nextDay === 'Sunday') {
         
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[6].SUN
         })      
       }
       
     }
     console.log(this.scheduleWork);
   }) 
    

    })
      }
    })
  }
  ngOnInit(): void {
    this.generateCalendar();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDates &&
        changes.selectedDates.currentValue &&
        changes.selectedDates.currentValue.length  > 1) {
      // sort on date changes for better performance when range checking
      this.sortedDates = _.sortBy(changes.selectedDates.currentValue, (m: CalendarDate) => m.mDate.valueOf());
      this.generateCalendar();
    }
  }
  // generate the calendar grid

  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);    
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
    console.log(weeks)
  }
  fillDates(currentMoment: moment.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
              const d = moment(firstDayOfGrid).date(date);
              return {
                today: this.isToday(d),
                selected: this.isSelected(d),
                mDate: d,
              };
            });
  }
  isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }
  isSelected(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    }) > -1;
  }
  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
    
  }
  selectDate(date: CalendarDate, workItem, event): void {

     this.selectedWorkout = workItem;
    
    // this.onSelectDate.emit(date);
    Array.from(document.querySelectorAll('.active')).forEach(i => {
      i.classList.remove('active');
    })
    event.target.classList.add('active')
  }
  prevMonth(): void {
    console.log(this.currentDate);
    this.currentDate =moment(this.currentDate).subtract(1,'months');
    this.generateCalendar();
  }
  nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }
  firstMonth(): void {
    this.currentDate = moment(this.currentDate).startOf('year');
    this.generateCalendar();
  }

  lastMonth(): void {
    this.currentDate = moment(this.currentDate).endOf('year');
    this.generateCalendar();
  }

  prevYear(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }
  clickDate(schedules) {
    console.log(schedules.date())
  }
  
}
