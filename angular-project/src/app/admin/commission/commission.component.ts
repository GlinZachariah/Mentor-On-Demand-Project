import { Component, OnInit } from '@angular/core';
import { CourseDetails, CommissionModel } from '../../data.model';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {
  currentCourses:CommissionModel[];
  updateCommission;
  constructor(
    private adminService:AdminService,
    private formBuilder:FormBuilder
  ) {
    if(this.adminService.adminLoggedIn){
      this.adminService.getCurrentCourse().subscribe((data:CommissionModel[])=>{
        this.currentCourses = data;
      });
      this.updateCommission =  this.formBuilder.group({
      newcoursecomm:''
    });
    }
  }

  newCommission(courseid,newCommissionValue){
    this.updateCommission.reset();
    // TODO subscribe to Service to see result of updateCourseCommission and return result
    let obs= this.adminService.updateCourseCommission(courseid,newCommissionValue/100);
    obs.subscribe();
    return newCommissionValue/100;
  }

  ngOnInit() {
  }

}
