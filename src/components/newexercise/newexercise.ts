import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';
import { NativeProvider } from '../../providers/native/native';
import { ExerciseProvider, ExerciseModel } from '../../providers/exercise/exercise';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'newexercise',
  templateUrl: 'newexercise.html',
  animations: [
  ]
})
export class NewexerciseComponent {
  selectExeType: number;
  exeType: boolean = true;
  exeTypes = ['Select Type','Examples Bench Press 12reps - 40 lbs','30 strumps','60 sec Plank'];
  exe_image = "../../assets/imgs/attach-img.svg";
  exe_type;  
  exe_muscle_types = [];
  sec_muscle_type;
  exerciseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public modalCtrl: ModalController, private nativeSrevice: NativeProvider, private exeService: ExerciseProvider, private imageService: ImageProvider, private actionsheet: ActionSheetController, private dataService: DataProvider, private authService: AuthProvider) {
    // this.presentModal();
    this.selectExeType = 0;
    this.getMuscles();
    // this.exeService.getMyExercises(dataService.u.id).subscribe(exeData => {
    //   console.log(exeData);
    // })
    this.exerciseForm = this.formBuilder.group({
      muscle_type: ['', Validators.required],
      exe_name: ['', Validators.required],
      exe_desc: ['', Validators.required],
      sec_muscle_type: ['',Validators.required],
      exe_level: ['',Validators.required],
    })
  }
  presentModal() {
    const modal = this.modalCtrl.create(ExeSetsComponent);
    modal.present();
  }
  // changeType(event) {
  //   const targetID = event.target.id;
  //   const element = document.getElementById(targetID);
  //   const allEle = Array.from(document.querySelectorAll('.single-exe-type')).forEach(item => {
  //         item.classList.remove('selected-exe-type')
  //   });
  //     this.exe_type = targetID;
  //     if(targetID === "exeTypeWeight") {
  //       this.selectExeType = 1;        
  //       element.classList.add('selected-exe-type');
  //     }
  //     else if(targetID === "exeTypeRepe") {
  //       this.selectExeType = 2;
  //       element.classList.add('selected-exe-type');
  //     }
  //     else if(targetID === "exeTypeDura") {
  //       this.selectExeType = 3
  //       element.classList.add('selected-exe-type');
  //     }
  //     else {
  //       this.selectExeType = 0;
  //       element.classList.add('selected-exe-type');
  //     }
  // }
  addExercise() {
    let secMuscles = {};
    for(let i= 0; i < this.exerciseForm.get('sec_muscle_type').value.length; i++) {
      console.log(this.exerciseForm.get('sec_muscle_type').value[i].split(' ')[0]);
      secMuscles[i] = {muscle_type: this.exerciseForm.get('sec_muscle_type').value[i].split(' ')[1], muscleid: this.exerciseForm.get('sec_muscle_type').value[i].split(' ')[0]};
      // .push({muscle_type: this.exerciseForm.get('sec_muscle_type').value[i].split(' ')[1], muscleid: this.exerciseForm.get('sec_muscle_type').value[i].split(' ')[0]})
    }
    console.log(secMuscles);



    const newExe: ExerciseModel = {
      exe_name: this.exerciseForm.get('exe_name').value,
      exe_pic: this.exe_image,
      exe_muscle: this.exerciseForm.get('muscle_type').value,
      sec_exe_muscle: secMuscles,
      // exe_type: this.exe_type,
      exe_desc: this.exerciseForm.get('exe_desc').value,
      userid: this.dataService.u.userid
    };
    
    

    if(this.exerciseForm.valid) {
      
        this.exeService.addExercise(newExe, this.authService.currentUserValue).take(1).subscribe(exeData => {
          if(!exeData.error) {
            console.log(exeData);
            this.nativeSrevice.generateToast('New Exercise Create','nothing', "bottom");
            this.exerciseForm.setValue({muscle_type: '',exe_name: '',exe_desc: '',sec_muscle_type: '', exe_level: ''});
  
          }
          else {
            this.nativeSrevice.generateToast('Error Creating Exercis!','nothing', "bottom");
          }
        })
      
      
    }
    else {
      this.nativeSrevice.generateToast('please feel required data!','nothing', "bottom");
    }
    
    
    
   
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
            role: 'destructive',
            handler: () => {
              this.imageService.selectPhoto().then(data => {
                console.log(data);
                this.imageService.uploadPhoto(data,'exercise').
                then(snap => {
                  const progress = ((snap.bytesTransferred*100)/snap.totalBytes);
                  snap.ref.getDownloadURL().then(url => {
                    this.exe_image = url;
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
                    this.exe_image = url;
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
  getMuscles() {
    this.dataService.userInfoObs.subscribe(user => {
      if(user.length > 0) {
        this.exeService.getMuscles(user[0].userid,this.authService.currentUserValue).subscribe(muscleData => {          
          if(muscleData.length > 0 ) {
            this.exe_muscle_types = muscleData;
          }
        })  
      }
      
    })
    
  }
}
