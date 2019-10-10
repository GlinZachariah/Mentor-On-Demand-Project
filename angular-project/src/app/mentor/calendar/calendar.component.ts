import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TIMESLOT } from "../../data";
import { MentorService } from '../mentor.service';
import { CalendarModel } from 'src/app/data.model';
import { MainService } from 'src/app/main.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarForm;
  timeSlots= TIMESLOT;
  calendarData:CalendarModel;
  calendarList:CalendarModel[];
  constructor(
    private formBuilder:FormBuilder,
    private mentorService :MentorService,
    private mainService:MainService
  ) { 
      this.mentorService.getCalendarData(this.mainService.LoggedInUsername).subscribe((data:CalendarModel[])=>{
        this.calendarList = data;
      });
    
    this.calendarForm = this.formBuilder.group({
      fromDate:'',
      tillDate:'',
      timeSlot:'',
      status:'',
    });
      
  }

  ngOnInit() {
  }

  saveCalendar(calendarForm){
    this.calendarData = this.mentorService.saveCalendar(calendarForm);
    this.calendarList.push(this.calendarData);
  }

  deleteCalendar(calendar,index){
    this.calendarData = {
      fromDate:calendar.fromDate,
      tillDate :calendar.tillDate,
      mentorName:calendar.mentorName,
      status:calendar.status,
      timeSlot:calendar.timeSlot
    }
    console.log(this.calendarData);
    this.mentorService.deleteCalendar(this.calendarData).subscribe();
    this.calendarList.splice(index,1);
  }

 

}
