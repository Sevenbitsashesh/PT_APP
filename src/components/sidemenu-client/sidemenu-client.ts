import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'sidemenu-client',
  templateUrl: 'sidemenu-client.html'
})
export class SidemenuClientComponent {

  
  @Input() currentUser;
  constructor(private router: Router, private authService: AuthProvider, private loadingCntrl: LoadingController) {
    
  }
  navProgress() {
    this.router.navigate(['userhome/client_progress']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navSchedules() {
    this.router.navigate(['userhome/client_schedule']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  navProfile() {
    this.router.navigate(['userhome/tab_profile']);
    document.getElementById("mySidenav").style.width = '0%';
  }
  logout() {
      this.authService.logout().subscribe(() => {    
          location.reload();
      })
    
    
  }  
}
