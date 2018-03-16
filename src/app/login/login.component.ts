import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import {Router} from '@angular/router';

import {AuthServiceService} from '../services/auth-services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthServiceService , private router : Router) {
    
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
    this.router.navigate(['dashboard']);
  }
}
