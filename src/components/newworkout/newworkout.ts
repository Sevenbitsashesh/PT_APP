import { Component, AfterViewInit, Output, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'rxjs/operator/delay';
import { Observable } from 'rxjs';
import * as anime from 'animejs'; 
import { NativeProvider } from '../../providers/native/native';
import { WorkoutProvider } from '../../providers/workout/workout';
import { DataProvider } from '../../providers/data/data';
import { ActionSheetController, ModalController, LoadingController } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';
import { AuthProvider } from '../../providers/auth/auth';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { ExeSelectionComponent } from '../../components/exe-selection/exe-selection';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { MuscleSlectionComponent } from '../../components/muscle-slection/muscle-slection';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';



@Component({
  selector: 'newworkout',
  templateUrl: 'newworkout.html'
})
export class NewworkoutComponent  implements AfterViewInit{

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
  //original
  @ViewChild(ExeSetsComponent) exeSelectionCom: ExeSetsComponent;
  exercisesDays = {"MON": [],'TUE': [],'WED': [],'THUR': [],'FRI': [],'SAT': [],'SUN': []};

  constructor(private nativeService: NativeProvider, private workService: WorkoutProvider, private dataService: DataProvider, private actionsheet: ActionSheetController, private imageService: ImageProvider, private auth: AuthProvider, private exeService: ExerciseProvider, private modal: ModalController, private loadingCntrl: LoadingController) {
   this.exeService.getExercises(auth.currentUserValue).subscribe(data => {
     console.log(data);
   })
   
   this.exeService.getMuscles(dataService.u.id,auth.currentUserValue).subscribe(exeMuscles => {
    this.listExer = exeMuscles;
   })
   
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
    this.work_tagcolor = event.target.id;
    console.log(this.work_tagcolor)
    document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
    // console.log(items);
    
    
    // document.getElementById(event.target.id).classList.add('shadow-tag-color1');
    
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
    else if(this.selectedDay = "Sun") {
      this.Sun.push(control.target.id);
      this.item1 = this.Sun;
    }
  }
  newWorkoutCreate() {
    const loading = this.loadingCntrl.create({
      content: "Please wait..."
    });    
    console.log(this.work_tagcolor);
    const newWork = {
      work_name: this.work_name,
      work_colortag: 'color1',
      userid: this.dataService.u.id,
      work_level: this.work_level,
      work_pic: this.work_image,      
      work_days: this.exercisesDays
    }
    console.log(this.exercisesDays);
    
      if(this.work_name && this.work_level) {
        if(this.checkExerciseData() > 2) {
          loading.present().then(loadingData => {
          this.workService.addWorkout(newWork,this.auth.currentUserValue).subscribe(workItems => {
            loading.dismiss();
            console.log(workItems);
            if(workItems) {
              
              this.nativeService.generateToast('New Workout Created','css','bottom');
              window.history.back();
            }
          })
        })
        }
        else {
          this.nativeService.generateToast('Please Fill Exercise For at least 3 Weekday.','css','bottom');
        }
        
      }
      else {
        this.nativeService.generateToast('Please fill details correctly!','css','bottom');
      }
    
    
    
  }
  removeItem(index) {   
   if(this.selectedDay === 'Mon') {
    console.log(this.exercisesDays.MON.splice(index,1));
   }
   else if(this.selectedDay === 'Tue') {
    this.exercisesDays.TUE.splice(index,1); 
   }
   else if(this.selectedDay === 'Wed') {
    this.exercisesDays.WED.splice(index,1); 
   }
   else if(this.selectedDay === 'Thur') {
    this.exercisesDays.THUR.splice(index,1); 
   }
   else if(this.selectedDay === 'Fri') {
    this.exercisesDays.FRI.splice(index,1); 
   }
   else if(this.selectedDay === 'Sat') {
    this.exercisesDays.SAT.splice(index,1); 
   }
   else if(this.selectedDay === 'Sun') {
    console.log(this.exercisesDays.SUN.splice(index,1));
   }

    // const items = event.target.id.split('_');
    // const index = this.item1.indexOf(items[1]+'_'+items[2]);

    // this.exercisesDays.splice(index,1);

    // console.log(index);
  }
  imageAction() {
    this.openActionsheet("camera").then(() => {
      console.log("Action Performed");
    })
   }
   openActionsheet(forThe: string) {
     if(forThe === "camera") {
      const action = this.actionsheet.create({
         title: 'Select Image From',
         buttons: [
           {
             text: 'Select from Gallary',
            //  role: 'destructive',
             handler: () => {
               this.imageService.selectPhoto().then(data => {
                 console.log(data);
                 this.imageService.uploadPhoto(data,'workout').
                 then(snap => {
                   const progress = ((snap.bytesTransferred*100)/snap.totalBytes);
                   snap.ref.getDownloadURL().then(url => {
                     this.work_image = url;
                     console.log(url);
                     // this.imageUrl.next(url);
                   })
                 }).catch(err => {
                   console.log('Error',err);
                 })
                 
               })
             }
           },{
             text: 'Capture Image',
             handler: () => {
               this.imageService.capturePhoto().then(data => {
                 this.imageService.uploadPhoto(data,'exercise').
                 then(snap => {
                   const progress = ((snap.bytesTransferred*100)/snap.totalBytes);
                   snap.ref.getDownloadURL().then(url => {
                     this.work_image = url;
                     console.log(url);
                     // this.imageUrl.next(url);
                   })
                 }).catch(err => {
                   console.log('Error',err);
                 })
               })
             }
           }
         ]
       });
       return action.present();
     }
     
   }
   clickBodyMuscle(exeItem) {
    // this.exeService.getExercise(this.auth.currentUserValue,{exe_muscle: exeItem.muscle_type, userid: this.dataService.u.userid}).subscribe(exeData => {
    //   if(exeData.length > 0) {
    //     console.log(exeData);
    //     this.exercises = exeData;
    //   }
    //   else {
    //     this.exercises = [];
    //   }
    // });
    this.exeService.getExercises(this.auth.currentUserValue).subscribe(exeData => {
      if(exeData.length > 0) {
        console.log(exeData);
        this.exercises = [];
        for(let i = 0; i < exeData.length; i++) {
          if(exeData[i].exe_muscle === exeItem.muscle_type) {
            this.exercises.push(exeData[i]);
          } 
        }       
      }
      else {
        this.exercises = [];
      }
    });
    
  }
   modalExerciseSelection(exercise,sets) {
     
    
     const day = this.selectedDay;
     console.log(day);
    
       console.log(exercise);       
       if(exercise) {
        exercise['sets'] = sets;
        if(day === "Mon") {
          this.exercisesDays.MON.push(exercise);  
        }
        else if(day === "Tue") {
          this.exercisesDays.TUE.push(exercise);
        }
        else if(day === "Wed") {
          this.exercisesDays.WED.push(exercise);
        }
        else if(day === "Thur") {
          this.exercisesDays.THUR.push(exercise);
        }
        else if(day === "Fri") {
          this.exercisesDays.FRI.push(exercise);
        }
        else if(day === "Sat") {
          this.exercisesDays.SAT.push(exercise);
        }
        else if(day === "Sun") {
          this.exercisesDays.SUN.push(exercise);
        }
        
        
       }
       console.log(this.exercisesDays);
      
    
     
   }
   addExercise() {
     if(this.selectedDay) {
      const modal = this.modal.create(MuscleSlectionComponent)
      modal.present().then(() => {
        console.log('Muscle Selection')
        modal.onDidDismiss(dataStatus => {
          // console.log(dataStatus); 
          if(dataStatus) {
            this.modalExerciseSelection(dataStatus.exercise, dataStatus.sets)
          }
          
        })
      });
     }
     else {
       this.nativeService.generateToast("Please select Day!","","bottom");
     }
     
   }
   checkExerciseData() {
     let dataItem: number = 0;
     if(this.exercisesDays.MON.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.TUE.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.WED.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.THUR.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.FRI.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.SAT.length > 0) {
      dataItem = dataItem + 1;
     }
     if(this.exercisesDays.SUN.length > 0) {
      dataItem = dataItem + 1;
     }
     return dataItem;
     
   }
}

