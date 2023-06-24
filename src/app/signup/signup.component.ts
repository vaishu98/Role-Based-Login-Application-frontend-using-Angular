import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private signupServie: SignupService,
    private router: Router){}

  username: string;
  password: string;

  public Signup(signuprequest: {username: string, password: string}) {
    var registeruser={
      "username": signuprequest.username,
      "password": signuprequest.password,
      "role": "ROLE_USER"
    };
    this.signupServie.signupMethod(registeruser).subscribe(
      (response: any)=>{
          console.log(response);
          alert("Registration successful!!");
          this.router.navigate(["Login"]);
      }, 
      (error) => {
          alert("Incorrect username or password");
      }
  );
  }

}
