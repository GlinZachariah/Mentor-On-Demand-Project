import { Component, OnInit } from '@angular/core';
import { TrainingProgress, UserProgress, UserCompleted } from 'src/app/data.model';
import { UserService } from '../user.service';
import { MainService } from 'src/app/main.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnInit {
  loggedUser: string;
  traingingProgressData: UserProgress[];
  rating: number[];
  userCompleted:UserCompleted;

  constructor(
    private updateService: UserService,
    private authService : MainService,
  ) {
    this.rating = [1,2,3,4,5];
    if(this.authService.isLoggedIn) {
     this.updateService.getUserTrainingsInProgress(this.authService.LoggedInUsername).subscribe((data:UserProgress[])=>{
      this.traingingProgressData=data;
     });

    }
   }

   updateRating(rating){
    rating+=1;
    rating=rating%6;
    return rating;
  }

  changeProgress(e) {
   return e.target.value;
  }

  saveData(data,i){
   if(data.progress == 100){
     // TODO subscribe to Service to see result of addCompletedTraining and deleteCourseProgress
     var endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString();
     this.userCompleted ={
       courseId:data.courseId,
       userName: data.userName,
       timeSlot: data.timeSlot,
       startDate: data.startDate,
       endDate: endDate ,
       rating: data.rating,
       charges:null,
       trainerName:null,
       technology:null
     }
     let obs1 =this.updateService.addCompletedTraining(this.userCompleted);
     obs1.subscribe();
     this.traingingProgressData.splice(i,1);
   }
   let obs=this.updateService.updateCourseProgress(data);
   obs.subscribe();
  }

  updatePayment(data,i){
   // TODO subscribe to Service to see result of updateCoursePayment
   data.paymentStatus='Paid';
   let obs= this.updateService.updateCoursePayment(data);
   obs.subscribe();
   data.courseStatus='On Going'
   this.traingingProgressData.splice(i,1);
   this.traingingProgressData.push(data);
  }

  deleteCourse(courseid){
    // TODO subscribe to Service to see result of deleteCourseProgress
    this.updateService.deleteCourseProgress(courseid);
  }

  ngOnInit() {
  }

}
