import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role:string){
    localStorage.setItem("role",role);
  }

  public getRole(){
    return localStorage.getItem("role");
  }

  public setToken(token:string){
    localStorage.setItem("token",token);
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }
}
