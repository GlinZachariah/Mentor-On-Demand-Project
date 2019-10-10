import { Component, OnInit } from '@angular/core';
import { Report, Mentor, signUpUserForm } from 'src/app/data.model';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  generateRep;
  mentorList:string[]=[];
  isReportGen:boolean= false;
  reportData:Report[];
  totalAmount:number;
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
    this.generateRep = this.formBuilder.group({
      username:''
    });
    if(this.adminService.adminLoggedIn){
    this.adminService.getMentorList().subscribe((data:signUpUserForm[])=>{
      data.forEach(user => {
        if(user.userRole=='mentor'){
          this.mentorList.push(user.userName);
        }
      });
    });
    }
  }

  generateReport(trainername){
    this.totalAmount=0;
    if(trainername == ''){
      trainername = this.mentorList[0];
    }
    this.adminService.getMentorReport(trainername).subscribe((data:Report[])=>{
      this.reportData= data;
      this.reportData.forEach(data => {
        this.totalAmount =this.totalAmount+ data.paymentAmount;
      });
    });
    console.log(this.totalAmount);
    this.isReportGen =true;
  }

  ngOnInit() {
  }

}
