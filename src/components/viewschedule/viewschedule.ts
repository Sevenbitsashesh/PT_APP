import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
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
  workoutFollow;  
  // @Input() defaultDate: ElementRef;
  constructor(private workoutService: WorkoutProvider, private dataService: DataProvider, private authService: AuthProvider, private clientService: ClientProvider) {
  
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
      console.log(data)

     for(let i = 0; i < data.clientinfo.client_workplan[0].weeks * 7; i++) {
       let start = moment(data.clientinfo.startFrom.split('T')[0]);        
       let nextDay = start.add(i,'days').format('dddd');        
       let nextDate = start.format('YYYY-MM-DD')
       
       if(nextDay === 'Monday') {
         for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
           if(data.myWorkout.work_days[j].MON) {
            console.log(data.myWorkout.work_days[j])
              this.scheduleWork.push({
                date: nextDate,
                data: data.myWorkout.work_days[j].MON
              })  
                          
           }
          
         }
        
       }
       else if(nextDay === 'Tuesday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].TUE) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].TUE
         })  
        }
      }    
       }
       else if(nextDay === 'Wednesday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].WED) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].WED
         })  
        }
      }    
       }
       else if(nextDay === 'Thursday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].THUR) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].THUR
         })  
        }
      }    
       }
       else if(nextDay === 'Friday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].FRI) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].FRI
         })      
        }
      }
       }
       else if(nextDay === 'Saturday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].SAT) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].SAT
         })      
        }
      }
       }
       else if(nextDay === 'Sunday') {
        for(let j = 0;j < data.myWorkout.work_days.length ; j++) {
          if(data.myWorkout.work_days[j].SUN) {
         this.scheduleWork.push({
           date: nextDate,
           data: data.myWorkout.work_days[j].SUN
         })   
        }
      }   
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
    this.currentDate = moment();
    
    
    this.dataService.userInfo.subscribe(client => {
      if(client.length > 0) {
        // console.log(client)
      this.getMyData(client);
      }
        
    })
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
    this.currentDate = moment(date.mDate)
     this.selectedWorkout = undefined;
    // this.selectedWorkout = this.scheduleWork
    for(let j=0;j< this.scheduleWork.length; j++) {
      // console.log(this.scheduleWork[j]['date'])
      // console.log(date.mDate.format('YYYY-MM-DD'))
      
      if(date.mDate.format('YYYY-MM-DD') === this.scheduleWork[j]['date']) {
        console.log('in')
        this.selectedWorkout = this.scheduleWork[j];
      }
      
      
      
    }
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
 ngAfterViewInit() {
   let date: CalendarDate;
    // let scheduleWork = this.scheduleWork[0].data;
    // console.log(scheduleWork)
  // console.log(this.defaultDate.nativeElement[0]);
  
 } 
}