import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { User } from './components/user/user';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './get-api/get-api';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';

export const routes: Routes = [
{
  path:'Admin',
  component:Admin
},
{
  path:'control-flow',
  component:ControlFlow
},
{
  path:'data-binding',
  component:DataBinding
},
{
path: 'signal-ex',
component: SignalEx
},
{
  path:'user',
  component:User
},
{
  path:'Attribute-dir',
  component:AttDirective
},
{
  path:'get-api',
  component:GetApi
},
{
  path:'User',
  component:User
},
{
  path:'reactiv-user',
  component:ReactiveUser
},
{
  path:'pipe-ex',
  component:PipeEx
}
];
