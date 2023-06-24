import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserAuthService } from '../service/userAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginservice: LoginService, 
    private userAuthService: UserAuthService, 
    private router: Router){
  }

  username: string;
  password: string;

  public Login(loginrequest: {username: string, password: string}) {
    this.loginservice.loginMethod(loginrequest).subscribe(
      (response: any)=>{
          this.userAuthService.setRole(response.role);
          this.userAuthService.setToken(response.accessToken);
          if(response.role === 'ROLE_ADMIN'){
            this.router.navigate(['/Admin']);
          }
          else if(response.role === 'ROLE_USER'){
            this.router.navigate(['/User']);
          }

      }, 
      (error) => {
          alert("Incorrect username or password");
      }
  );
  }

}
