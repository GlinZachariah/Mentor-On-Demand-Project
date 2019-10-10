import { Component, OnInit } from '@angular/core';
import { UserForm, signUpUserForm } from 'src/app/data.model';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  UserData: signUpUserForm[]=[];
  MentorData: signUpUserForm[]=[];
  custIndx;
  data: UserForm;
  role:string;
  constructor(
    private adminService:AdminService,
    private route:Router
  ) {

    if(this.adminService.adminLoggedIn){
      this.adminService.getUserPermission().subscribe((dataItem:signUpUserForm[])=>{
        dataItem.forEach(user => {
          if(user.userRole=='user'){
            this.UserData.push(user);
          }else{
            this.MentorData.push(user);
          }
        });
      });
    }
   }

   updatePermission(data){
    // TODO update with new permission value
    // data.accountStatus= 
    let obs= this.adminService.updateUserPermission(data);
    obs.subscribe();
    if(data.accountStatus == 'locked'){
      data.accountStatus ='unlocked';
    }else{
      data.accountStatus ='locked';
    }
   }

  ngOnInit() {
  }

}
