import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {
  userList: any[] = [];
  http = inject(HttpClient);

  userForm: FormGroup = new FormGroup({
    userId: new FormGroup(0),
    emailId: new FormGroup('', [Validators.required, Validators.minLength(5),Validators.email]),
    password: new FormGroup('', Validators.required),
    fullName: new FormGroup(''),
    mobileNo: new FormGroup(''),
  });

  ngOnInit(): void {
   this.getUser();
  }

  getUser() {
    this.http
      .get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
  onSaveUser() {
    
    const formValue = this.userForm.value;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe({
      next: (result) => {
        
        alert('User Createed Success');
        this.getUser();
        this.userForm.reset();
      },
      error: (error) => {
      
        alert('Error -' + error.error);
      },
    });
  }
}
