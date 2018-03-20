import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthServiceService} from '../../services/auth-services/auth-service.service'

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private authService : AuthServiceService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isAuthorized()){
        return true;
      } else {
        this.router.navigate(['\login']);
      }
  }
}
