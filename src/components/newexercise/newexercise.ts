import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from 'ionic-angular';
import { ExeSetsComponent } from '../../components/exe-sets/exe-sets';
import { NativeProvider } from '../../providers/native/native';
import { ExerciseProvider, ExerciseModel } from '../../providers/exercise/exercise';
import { ImageProvider } from '../../providers/image/image';
import { DataProvider } from '../../providers/data/data';


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
  exe_muscle;
  exe_name;
  exe_type;
  exe_desc;
  constructor(public modalCtrl: ModalController, private nativeSrevice: NativeProvider, private exeService: ExerciseProvider, private imageService: ImageProvider, private actionsheet: ActionSheetController, private dataService: DataProvider) {
    // this.presentModal();
    this.selectExeType = 0;
    
    // this.exeService.getMyExercises(dataService.u.id).subscribe(exeData => {
    //   console.log(exeData);
    // })
  }
  presentModal() {
    const modal = this.modalCtrl.create(ExeSetsComponent);
    modal.present();
  }
  changeType(event) {
    const targetID = event.target.id;
    const element = document.getElementById(targetID);
    const allEle = Array.from(document.querySelectorAll('.single-exe-type')).forEach(item => {
          item.classList.remove('selected-exe-type')
    });
      this.exe_type = targetID;
      if(targetID === "exeTypeWeight") {
        this.selectExeType = 1;        
        element.classList.add('selected-exe-type');
      }
      else if(targetID === "exeTypeRepe") {
        this.selectExeType = 2;
        element.classList.add('selected-exe-type');
      }
      else if(targetID === "exeTypeDura") {
        this.selectExeType = 3
        element.classList.add('selected-exe-type');
      }
      else {
        this.selectExeType = 0;
        element.classList.add('selected-exe-type');
      }
  }
  addExercise() {
    
    const newExe: ExerciseModel = {
      exe_name: this.exe_name,
      exe_pic: this.exe_image,
      exe_muscle: this.exe_muscle,
      exe_type: this.exe_type,
      exe_desc: this.exe_desc,
      userid: this.dataService.u.id
    };
    this.exeService.addExercise(newExe).subscribe(data => {
      if(!data.error) {
        console.log(data);
        this.nativeSrevice.generateToast('New Exercise Create','nothing');
      }
    });
    
   
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
}
