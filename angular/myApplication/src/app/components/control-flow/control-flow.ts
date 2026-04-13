import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule,],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisiable: boolean=true;

  startMonthName: string ="feb";

  citList :string[]=["pune","mumbai","panji","nagpur"];

  studentList: any[]=[
    {name:'nagu', city:'harugeri', isActive:false},
     {name:'vasu', city:'teradala', isActive:false},
      {name:'sonali', city:'belagavi', isActive:true},
       {name:'preethi', city:'athani', isActive:false},
  ]

  showP (){
    this.isParaVisiable = true;
  }

hideP(){
  this.isParaVisiable=false;
}

}
