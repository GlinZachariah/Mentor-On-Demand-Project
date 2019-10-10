import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';
import { MentorModel, Technology, CalendarModel, MentorProgress } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  loggedinUser;
  calendar:CalendarModel
  constructor(
    private http:HttpClient,
    private mainService:MainService
  ) {
    this.loggedinUser =mainService.LoggedInUsername;
   }

   getMentorCourses(mentorname: string) {
    return this.http.get('/api/mentor/getCoursesList/'+mentorname);
  }

  addCourseDetails(CourseDetails){
    // TODO send POST request to addCourseDetails 
    let obs = this.http.post('/api/mentor/addCourse',CourseDetails);
    obs.subscribe();
  }

  deleteCourse(courseid){
    return this.http.delete('/api/mentor/deleteCourse/'+courseid);
  }

  saveCalendar(calendarData){
    this.calendar={
      fromDate:calendarData.fromDate,
      tillDate:calendarData.tillDate,
      timeSlot:parseInt(calendarData.timeSlot),
      mentorName:this.loggedinUser,
      status:calendarData.status
    }
    let obs = this.http.post('/api/mentor/addCalendar',this.calendar);
    obs.subscribe();
    return this.calendar;
  }

  getCalendarData(username){
    return this.http.get('/api/mentor/findCalendar/'+username);
  }

  deleteCalendar(data:CalendarModel){
    return this.http.put('/api/mentor/deleteCalendar/',data);
  }

  updateMentorDetails(formData,mentorUsername){
    // TODO send POST request to updateMentorDetails 
    this.http.post('/api/users/newValue/'+mentorUsername,formData).subscribe();
  }

  getMentorDetails(username):Observable<MentorModel>{
    return  this.http.get<MentorModel>('/api/mentor/getMentorDetails/'+username);
  }

  getMentorSkills(username):Observable<Technology[]>{
    return this.http.get<Technology[]>('/api/mentor/getMentorSkills/'+username);
  }

  getCourseHistory(username){
    return this.http.get("/api/users/getMentorCourseDetails/"+username);
  }

  getMentorProgress(username){
    return this.http.get('/api/mentor/viewMentorHistory/'+username);
  }

  approveCourse(data){
    data.courseStatus = 'Approved';
   return this.http.put('/api/users/updateMentorCourseDetails',data);
  }

  rejectCourse(data){
    data.courseStatus = 'Rejected';
    return this.http.put('/api/users/updateMentorCourseDetails',data);
  }

  withdraw(data){
    return this.http.put('/api/mentor/withdrawAmount',data);
  }

  updateMentorSkills(skills,username){
    return this.http.post('/api/mentor/updateMentorSkill/'+username,skills);
  }

}
