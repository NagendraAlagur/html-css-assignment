import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  
  courseName: string="myApplication";
  productPrice: number=12599;

  maxlength: number=5;
  minchar : number=3;

  inputType: string="checkbox";

  myClassName : string="myColor";


constructor (){

}


 showWelcomeMessage(){
  alert("welcome to my application")
 }

 changeCourseName(){
  this.courseName ="Reactjs Tutorial"
 }

 onCityChange() {
  alert('city changed')
 }
  

}
