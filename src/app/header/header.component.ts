import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserAuthService } from '../service/userAuth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private userAuthService: UserAuthService, 
    private router: Router,
    private loginService: LoginService
    ){}

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate([''])
  }

  public roleMatch(role: string){
    return this.loginService.roleMatch(role);
  }

}
