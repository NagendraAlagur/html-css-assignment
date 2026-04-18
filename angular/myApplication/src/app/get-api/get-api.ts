import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  busUserList:any[]=[];


  ngOnInit(): void {
    debugger;
    this.getusers();
    this.getTodoItems();
    this.getAllBusBookingUser();
  }

  getusers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.userList = result  ;
    });
  }

  getTodoItems() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((Response: any) => {
      this.todoList = Response;
    });
  }

  getAllBusBookingUser() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe((res:any)=>{
    this.busUserList =res.data;
    });
  }
}
