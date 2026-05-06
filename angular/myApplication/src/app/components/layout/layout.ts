import { Component, inject } from '@angular/core';
import { Master } from '../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

    loggedUserName: string = '';
    router= inject(Router)
  
    constructor(private masterService: Master) {
      this.readloggedData();
      this.masterService.onLogin.subscribe((res) => {
        this.readloggedData();
      });
    }
  
    readloggedData() {
      const loggedData = localStorage.getItem('angular20User');
      if (loggedData != null) {
        this.loggedUserName = loggedData;
      }
    }
  
    onLoggOff(){
      localStorage.getItem('angular20User');
      this.readloggedData();
      this.loggedUserName='';
      this.router.navigateByUrl('/login')
    }
}
