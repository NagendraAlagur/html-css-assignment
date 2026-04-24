import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';
import { Login } from './component/login/login';
import { Admin } from "./component/admin/admin";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myUiproject');
}
