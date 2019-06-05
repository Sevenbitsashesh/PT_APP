import { Component, OnDestroy, Input, ElementRef, Renderer } from '@angular/core';
import { ViewController, NavParams, LoadingController } from 'ionic-angular';
import { WorkoutProvider } from '../../providers/workout/workout';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';
import { ClientProvider } from '../../providers/client/client';
import { ActivatedRoute } from '@angular/router';
import { NativeProvider } from '../../providers/native/native';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'selectclient',
  templateUrl: 'selectclient.html'
})
export class SelectclientComponent implements OnDestroy {
  selectedClient = [];
  unselectedClient = [];
  asign = [];
  unasign = [];
  work_name;

  // Drawer Slider
  @Input('options') options: any;

  handleHeight: number = 50;
  bounceBack: boolean = true;
  thresholdTop: number = 200;
  thresholdBottom: number = 200;

  constructor(private viewController: ViewController, private navParam: NavParams, private authService: AuthProvider,private dataService: DataProvider ,private workService: WorkoutProvider, private clientSrevice: ClientProvider, private nativeService: NativeProvider, private loadingCntrl: LoadingController) {
    const loading = this.loadingCntrl.create({
      content: "Loading",
      spinner: "dots"
    });
    this.work_name = this.navParam.get('workoutname')
    loading.present().then(loadingData => {
      this.dataService.clientInfoObs.subscribe(da => {
        this.clientSrevice.getMyClients(da,authService.currentUserValue).subscribe(clientData => {
          loading.dismiss()
          for(let i = 0;i < clientData.length; i++) {
            
            const client = clientData[i].client_workplan;
            if(client[0]) {
              
                
              if(client[0].workout_planid === this.navParam.get('workoutid')) {
                  this.selectedClient.push(clientData[i])
                  // console.log(this.selectedClient)
              } else {
                this.unselectedClient.push(clientData[i])
                // console.log(this.unselectedClient)
              }
              
            }
            else {
              this.unselectedClient.push(clientData[i])
            }
          }
        })
    })
    })
    
    
    this.viewController.onDidDismiss(data => {
      // console.log('Dismissing')
    })
  }
  goBack() {
    this.viewController.dismiss().then(dismisData => {
      console.log(dismisData)
    })
  }
  unassign(item) {    
    const arr = this.selectedClient.indexOf(item);    
    item.assign = false;
    this.selectedClient.splice(arr,1)[0];
      // this.unasign.push(this.selectedClient.splice(arr,1)[0]);      
      // this.asign.splice(item,1);    
       this.unselectedClient.push(item);
       
  }
  assign(item) {    
    // item.client_workplan[0].oldworkout_planid = item.client_workplan[0].workout_planid;
    
    const arr = this.unselectedClient.indexOf(item);  
    item.assign = true;  
    this.unselectedClient.splice(arr,1)[0]
    // this.asign.push(this.unselectedClient.splice(arr,1)[0]);      
    this.selectedClient.push(item);
    // this.unasign.splice(item,1);
    
  }
  saveClients() {
    // Remove Workout To Client
    
    for(let i = 0; i < this.unselectedClient.length; i++) {
     if(this.unselectedClient[i].assign) {
      this.clientSrevice.updateClientWorkout('',this.unselectedClient[i].id,this.authService.currentUserValue).take(1).subscribe(data => {
        if(data['message'] === "success") {
          // window.history.back();
        }
      })
     }
      
     
      
    }


    // // Add Workout To Client
    for(let i = 0; i < this.selectedClient.length; i++) {
      if(!this.unselectedClient[i].assign ) {
        this.clientSrevice.updateClientWorkout(this.navParam.get('workoutid'),this.selectedClient[i].id,this.authService.currentUserValue).take(1).subscribe(data => {
          if(data['message'] === "success") {
            // window.history.back();
            this.nativeService.generateToast('Workout Assigned Succesfully','','bottom');
          }
        })
      }
        
      
      
    }
    this.goBack();
    
  }
  ngOnDestroy() {
    
  }

  //Navigation Drawer
  ngAfterViewInit() {

    // if(this.options.handleHeight){
    //   this.handleHeight = this.options.handleHeight;
    // }

    // if(this.options.bounceBack){
    //   this.bounceBack = this.options.bounceBack;
    // }

    // if(this.options.thresholdFromBottom){
    //   this.thresholdBottom = this.options.thresholdFromBottom;
    // }

    // if(this.options.thresholdFromTop){
    //   this.thresholdTop = this.options.thresholdFromTop;
    // }

    // this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
    // this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');

    // let hammer = new window['Hammer'](this.element.nativeElement);
    // hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });

    // hammer.on('pan', (ev) => {
    //   console.log('panning');
    //   this.handlePan(ev);
    // });

  }
  handlePan(ev){

    // let newTop = ev.center.y;

    // let bounceToBottom = false;
    // let bounceToTop = false;

    // if(this.bounceBack && ev.isFinal){

    //   let topDiff = newTop - this.thresholdTop;
    //   let bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;      

    //   topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;

    // }

    // if((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop){

    //   this.domCtrl.write(() => {
    //     this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
    //     this.renderer.setElementStyle(this.element.nativeElement, 'top', '0px');
    //   });

    // } else if(((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom){

    //   this.domCtrl.write(() => {
    //     this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
    //     this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - this.handleHeight + 'px');
    //   });

    // } else {

    //   this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');

    //   if(newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {

    //     if(ev.additionalEvent === "panup" || ev.additionalEvent === "pandown"){

    //       this.domCtrl.write(() => {
    //         this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
    //       });

    //     }

    //   }

    // }

  }

}
