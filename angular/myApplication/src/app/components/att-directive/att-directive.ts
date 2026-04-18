import { DATE_PIPE_DEFAULT_OPTIONS, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy  {


  Div1ClassName = signal<string>('');

  firstName: string ="nagendra"
  courseName: string="angular20 tutorial"

  rollNoList= [11,12,13,14,15,16,17,]


  isDiv2Green : boolean = false;

   currentDate: Date = new Date();

  studentObj: any ={
    name: 'Nagendra',
    city: 'belagavi',
    state: 'karnataka'

  }
 
   constructor(){
    console.log("constructor");
   }


   ngOnInit(): void {
     console.log("ngOnInit")
     //to trigger API calls
     //to subsscribe
   } 


  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log(" ngAfterContentInit")
  }


  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //to deal viewChild
    //subscribe
  }


  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked") 
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy")

    //unsubscribe
    //restrict user from navigating
  }





  setBgClass(className: string) {
    this.Div1ClassName.set(className);
  }

  toggleDiv2Color(){
    this.isDiv2Green = ! this.isDiv2Green;
  }
}
