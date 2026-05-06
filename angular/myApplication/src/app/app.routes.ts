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
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';


/*@export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'Admin',
        component: Admin,
      },
      {
        path: 'control-flow',
        component: ControlFlow,
      },
      {
        path: 'data-binding',
        component: DataBinding,
      },
      {
        path: 'signal-ex',
        component: SignalEx,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'Attribute-dir',
        component: AttDirective,
      },
      {
        path: 'get-api',
        component: GetApi,
      },
      {
        path: 'User',
        component: User,
      },
      {
        path: 'reactiv-user',
        component: ReactiveUser,
      },
      {
        path: 'pipe-ex',
        component: PipeEx,
      },
      {
        path: 'resource-api',
        component: ResourceApi,
      },
    ],
  },
]; */

export const routes: Routes = [
  // 🔹 Default redirect
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // 🔹 Login page (no layout)
  {
    path: 'login',
    component: Login,
  },

  // 🔹 Layout with child pages
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'admin',
        component: Admin,
      },
      {
        path: 'control-flow',
        component: ControlFlow,
      },
      {
        path: 'data-binding',
        component: DataBinding,
      },
      {
        path: 'signal-ex',
        component: SignalEx,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'attribute-dir',
        component: AttDirective,
      },
      {
        path: 'get-api',
        component: GetApi,
      },
      {
        path: 'reactive-user',
        component: ReactiveUser,
      },
      {
        path: 'pipe-ex',
        component: PipeEx,
      },
      {
        path: 'resource-api',
        component: ResourceApi,
      },
    ],
  },
];