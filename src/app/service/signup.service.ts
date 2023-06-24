import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  requestHeader = new HttpHeaders (
    {"No-Auth":"True"}
);
public signupMethod(signuprequest: {username: string, password: string, role: string}){
    console.log(signuprequest);
    return this.http.post('http://localhost:8080/api/auth/register', signuprequest, {headers: this.requestHeader});
}
}
