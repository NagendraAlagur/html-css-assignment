import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: '',
  };

  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == '112233') {
      this.router.navigateByUrl('/admin');
      localStorage.setItem('angular20User', 'Admin');
    } else {
      alert('wrong password');
    }
  }
}
