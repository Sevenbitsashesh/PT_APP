import { Component, ViewChild, ElementRef } from '@angular/core';
import { ExeSelectionComponent } from '../../components/exe-selection/exe-selection';
import { NativeProvider } from '../../providers/native/native';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { ActionSheetController, ModalController, NavParams } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'workoutdetails',
  templateUrl: 'workoutdetails.html'
})
export class WorkoutdetailsComponent {

  days = ['MON','TUE','WED','THUR','FRI','SAT','SUN'];
  exerciseSelect: boolean;
  item1 = [];
  
  work_image = "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/workout%2Fimages%20(2).jpeg?alt=media&token=cfaeab59-cf31-4904-957f-b97761d63ed4";
  work_level;
  work_tagcolor;
  work_name;
  Mon = [];
  Tue = [];
  Wed = [];
  Thur = [];
  Fri = [];
  Sat = [];
  Sun = [];
  listExer = [];
  selectedDay;
  exercises = [];
  @ViewChild(ExeSelectionComponent) exeSelectionCom: ExeSelectionComponent;
  exercisesDays = [];

  @ViewChild('color1') myColor1: ElementRef;
  @ViewChild('color2') myColor2: ElementRef;
  @ViewChild('color3') myColor3: ElementRef;
  @ViewChild('color4') myColor4: ElementRef;
  @ViewChild('color5') myColor5: ElementRef;
  @ViewChild('color6') myColor6: ElementRef;
  
  
  constructor(private nativeService: NativeProvider, private workService: WorkoutProvider, private dataService: DataProvider, private actionsheet: ActionSheetController, private imageService: ImageProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private modal: ModalController, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(workParam => {
      workService.getMyWorkout(auth.currentUserValue,workParam.workid).subscribe(data => {

        // Setting Workout Tag Color
        if(data.work_colortag === "color1") {
          this.myColor1.nativeElement.click();
        }
        else if(data.work_colortag === "color2") {
          this.myColor2.nativeElement.click();
        }
        else if(data.work_colortag === "color3") {
          this.myColor3.nativeElement.click();
        }
        else if(data.work_colortag === "color4") {
          this.myColor4.nativeElement.click();
        }
        else if(data.work_colortag === "color5") {
          this.myColor5.nativeElement.click();
        }
        else if(data.work_colortag === "color6") {
          this.myColor6.nativeElement.click();
        }
        //Setting Workday
        this.exercisesDays = data.work_days;
        // Setting Workout Name
        this.work_name = data.work_name;
        this.work_level = data.work_level;

      })
    })
    this.exeService.getExercises(auth.currentUserValue).subscribe(data => {
      console.log(data);
    })
    
    this.exeService.getMuscles(dataService.u.id,auth.currentUserValue).subscribe(exeMuscles => {
     this.listExer = exeMuscles;
    })

  
  }
  tagClick1(event) {
    var items = Array.from(document.querySelectorAll('.color-tag')).forEach(items => {
      items.classList.remove('shadow-tag-color1');
      
    })
    // for(var i; i <items.length;i++) {
    //   console.log(i);
    //   items.item(i).classList.remove('shadow-tag-color1');      
    // }
    this.work_tagcolor = event.target.id;
    console.log(this.work_tagcolor)
    document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
    // console.log(items);
    
    
    // document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
  }
  newWorkoutBack() {
    window.history.back();
  }
  clickDay(dayControl) {
    var idDay = dayControl.target.id;
    console.log(idDay);
    if(idDay.split('_')[1] === "Mon") {
      // this.item1 = ['SQUAT','LEG Extention'];
          this.exerciseSelect = true;
          this.selectedDay = "Mon";
          this.item1 = this.Mon;
    }
    else if(idDay.split('_')[1] === "Tue") {
      // this.item1 = ['Dumbbell Lunges','Burpee', 'Barbel Lunge'];
      this.exerciseSelect = true;
      this.selectedDay = "Tue";
      this.item1 = this.Tue;
    }
    else if(idDay.split('_')[1] === "Wed") {
      // this.item1 = ['Abs Scrunch','Trap Bar Deadlift', 'Barbel Push Up'];
      this.exerciseSelect = true;
      this.selectedDay = "Wed";
      this.item1 = this.Wed;
    }
    else if(idDay.split('_')[1] === "Thur") {
      // this.item1 = ['Abs Scrunch','Trap Bar Deadlift'];
      this.exerciseSelect = true;
      this.selectedDay = "Thur";
      this.item1 = this.Thur;
    }
    else if(idDay.split('_')[1] === "Fri") {
      // this.item1 = ['Trap Bar Deadlift'];
      this.exerciseSelect = true;
      this.selectedDay = "Fri";
      this.item1 = this.Fri;
    }
    else if(idDay.split('_')[1] === "Sat") {
      // this.item1 = ['Barbel Push Up'];
      this.exerciseSelect = true;
      this.selectedDay = "Sat";
      this.item1 = this.Sat;
    }
    else if(idDay.split('_')[1] === "Sun") {
      // this.item1 = [];
      this.exerciseSelect = true;
      this.selectedDay = "Sun";
      this.item1 = this.Sun;
    }
    
    Array.from(document.querySelectorAll('.single-day')).forEach(items => {
      items.classList.remove('single-day-selected');
    })
    document.getElementById(dayControl.target.id).classList.add('single-day-selected');
    
  }
  selectExe(control) {
    // this.item1.push(control.target.id);
    console.log(this.selectedDay);
    if(this.selectedDay = "Mon") {
      this.Mon.push(control.target.id);
      this.item1 = this.Mon;
    }
    else if(this.selectedDay = "Tue") {
      this.Tue.push(control.target.id);
      this.item1 = this.Tue;
    }
    else if(this.selectedDay = "Wed") {
      this.Wed.push(control.target.id);
      this.item1 = this.Wed;
    }
    else if(this.selectedDay = "Thur") {
      this.Thur.push(control.target.id);
      this.item1 = this.Thur;
    }
    else if(this.selectedDay = "Fri") {
      this.Fri.push(control.target.id);
      this.item1 = this.Fri;
    }
    else if(this.selectedDay = "Sat") {
      this.Sat.push(control.target.id);
      this.item1 = this.Sat;
    }
    else if(this.selectedDay = "Sund") {
      this.Sun.push(control.target.id);
      this.item1 = this.Sun;
    }
  }
  clickBodyMuscle(exeItem) {
    this.exeService.getExercise(this.auth.currentUserValue,{exe_muscle: exeItem.muscle_type, userid: this.dataService.u.userid}).subscribe(exeData => {
      if(exeData.length > 0) {
        console.log(exeData);
        this.exercises = exeData;
      }
      else {
        this.exercises = [];
      }
      

    });
    
  }
  modalExerciseSelection(exercise) {
     
    const modal = this.modal.create(ExeSelectionComponent,{exercise: exercise});
    modal.present();
    const day = this.selectedDay;
    console.log(day);
    modal.onDidDismiss(data => {
      console.log(data);       
      if(data.length > 0) {
       exercise['sets'] = data;
       if(day === "Mon") {
         this.exercisesDays.push({MON: exercise});  
       }
       else if(day === "Tue") {
         this.exercisesDays.push({TUE: exercise});
       }
       else if(day === "Wed") {
         this.exercisesDays.push({WED: exercise});
       }
       else if(day === "Thur") {
         this.exercisesDays.push({THUR: exercise});
       }
       else if(day === "Fri") {
         this.exercisesDays.push({FRI: exercise});
       }
       else if(day === "Sat") {
         this.exercisesDays.push({SAT: exercise});
       }
       else if(day === "Sun") {
         this.exercisesDays.push({SUN: exercise});
       }
       
       
      }
      console.log(this.exercisesDays);
     
    })
    
  }
  removeItem(item) {
    let i = this.exercisesDays.indexOf(item);
    console.log(i)
    this.exercisesDays.splice(i,1);
  }
}
