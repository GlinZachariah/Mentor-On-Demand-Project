import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';
import { MentorHistory } from "../../data.model";
import { MainService } from "../../main.service";
import { TimeslotPipe } from "../timeslot.pipe";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
   mentorHistoryData:MentorHistory[];
  constructor(
    private authService:MainService,
    private mentorService:MentorService
  ) { 
    if(this.authService.isLoggedIn){
      this.mentorService.getCourseHistory(this.authService.LoggedInUsername).subscribe((data:MentorHistory[])=>{
        this.mentorHistoryData = data;
      })
    }
  }

  ngOnInit() {
  }

  approveCourse(data,i){
    let obs = this.mentorService.approveCourse(data);
    obs.subscribe();
    this.mentorHistoryData.splice(i,1);
    this.mentorHistoryData.push(data);
  }

  rejectCourse(data,i){
    let obs =this.mentorService.rejectCourse(data);
    obs.subscribe();
    this.mentorHistoryData.splice(i,1);
    this.mentorHistoryData.push(data);
  }

  withdrawAmount(data,i){
    if(data.totalCount >0){
      let  obs  =this.mentorService.withdraw(data);
      obs.subscribe((data:MentorHistory)=>{
        this.mentorHistoryData[i].totalCount = data.totalCount;
      });
    }
  }

}
