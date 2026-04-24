import { Routes } from '@angular/router';
import { Admin } from './component/admin/admin';
import { Dashboard } from './component/dashboard/dashboard';
import { Login } from './component/login/login';

export const routes: Routes = [
   {
    path:'admin',
    component:Admin
   },
   {
    path:'dashboard',
    component:Dashboard
   },
   {
    path:'login',
    component:Login
   },

];
