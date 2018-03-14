import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import {Error401Component} from './error401/error401.component';
import {LoginComponent} from './login/login.component';

const routes : Routes = [
  {
    path : '', 
    component:  LoginComponent
  },
  {
    path : '401', 
    component:  Error401Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
