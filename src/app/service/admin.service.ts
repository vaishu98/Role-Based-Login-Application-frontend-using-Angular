import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  public fetchusers(){
    return this.http.get('http://localhost:8080/api/admin/homepage', {headers: this.headers});
}
}
