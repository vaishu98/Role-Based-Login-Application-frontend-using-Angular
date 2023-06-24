import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersList } from '../model/usersList';
import { AdminService } from '../service/admin.service';
import { UserAuthService } from '../service/userAuth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(
    private adminService: AdminService,
    private userAuthService: UserAuthService,
    private router: Router
  ){}

  usersList: Array<UsersList>=[];
  fetchedList: Array<UsersList>=[];

  public fetchUsers() {
    this.adminService.fetchusers().subscribe(
      (response: any)=>{
          response.forEach((element: any) => {
            this.fetchedList.push(new UsersList(element.username, element.role));
            this.updateData(this.fetchedList);
          });
      }, 
      (error) => {
          alert("Error fetching data from backend");
      }
  );
  }

  public updateData(fetchedList: UsersList[]){
    this.usersList=fetchedList;
    console.log("outside",this.usersList);
  }

  public temp(fetchedList: UsersList[]){
    this.usersList=fetchedList;
  }
}
