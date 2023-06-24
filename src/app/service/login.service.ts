import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserAuthService } from "./userAuth.service";

@Injectable({providedIn: "root"})
export class LoginService{

    constructor(private http: HttpClient, private userAuthService: UserAuthService){

    }

    requestHeader = new HttpHeaders (
        {"No-Auth":"True"}
    );
    public loginMethod(loginrequest: {username: string, password: string}){
        console.log(loginrequest);
        return this.http.post('http://localhost:8080/api/auth/login', loginrequest, {headers: this.requestHeader});
    }

    public roleMatch(role: string): boolean{
        if(role != null){
            return role === this.userAuthService.getRole();
        }
        return false;
    }

}