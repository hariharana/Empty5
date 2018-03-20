import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';


import {Error401Component} from './error401/error401.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginGuardGuard } from './guard/login-guard/login-guard.guard';

const routes : Routes = [ 
  {
    path : '', 
    component:  LoginComponent
  },
  {
    path : 'login', 
    component:  LoginComponent
  },
  {
    path : '401', 
    component:  Error401Component
  }, 
  {
    path : 'dashboard', 
    component:  DashboardComponent, 
    canActivate : [
      LoginGuardGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
