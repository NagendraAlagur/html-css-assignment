import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './components/services/master';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('myApplication');
  //loggedUserName: string = '';

 // constructor(private masterService: Master) {
   // this.readloggedData();
    //this.masterService.onLogin.subscribe((res) => {
     // this.readloggedData();
    //});
 // }

  //readloggedData() {
    //const loggedData = localStorage.getItem('angular20User');
    //if (loggedData != null) {
     // this.loggedUserName = loggedData;
    //}
  //}

  //onLoggOff(){
    //localStorage.removeItem("angular20Use")
    //this.readloggedData();
    //this.loggedUserName='';
  //}
}
