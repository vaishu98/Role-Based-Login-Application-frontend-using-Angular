import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { UserAuthService } from '../service/userAuth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private loginService: LoginService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userAuthService.getToken() != null){
      const role = route.data["role"];
      if(role){
        const match = this.loginService.roleMatch(role);
        if(match){
          return true;
        }
        else{
          this.router.navigate(["Forbidden"]);
          return false;
        }

      }
    }
    this.router.navigate(["Login"]);
    return false;
  }
  
}
