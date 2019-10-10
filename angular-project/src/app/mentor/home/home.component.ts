import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MainService } from '../../main.service';
import { AlertMessage, Technology, CourseMaterial, CourseDetails, CardDetails } from '../../data.model';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { MentorService } from "../mentor.service";
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentorname:string;
  mentorSkills: Technology[];
  addCourseForm;
  materialType;
  cardDetails;
  tech:Technology;
  course:CourseDetails;
  alertAddCourse:AlertMessage;
  alertDeleteCourse:AlertMessage;
  coursesList:CourseDetails[];
  val1:string;
  val2:number;
  val3:number;
  val4:number;
  cardData:CardDetails; 

  @Output() LoginStatus = new EventEmitter<AlertMessage>();
  constructor(
    private authService:MainService,
    private formBuilder:FormBuilder,
    private mentorService:MentorService,
    private userService:UserService
  ) {
    this.mentorname = authService.LoggedInUsername;
    this.mentorService.getMentorSkills(this.mentorname).subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.addCourseForm =this.formBuilder.group({
      courseId:'',
      courseName:'',
      courseDuration:'',
      courseTechnology:'',
      courseCost:''
    });
    // TODO save the getcardDetails value into the cardDetailsValue property and display if null dont update
    let obsn = this.userService.getCardDetails(this.mentorname);
    obsn.subscribe((data:CardDetails)=>{
        // console.log("CardNumber =>"+ data.cardNo+"<=>"+data.username+"<=>"+data.mM);
        this.val1 = data.cardNo;
        if(this.val1!=''){
          this.val2 = data.mM;
          this.val3 = data.yY;
          this.val4 = data.cV;
        }
        this.cardDetails = this.formBuilder.group({
          cardNumber:this.val1,
          cardExpM:this.val2,
          cardExpY:this.val3,
          cardCV:this.val4
        });
      });

    let obs = this.mentorService.getMentorCourses(this.mentorname);
    obs.subscribe((data:CourseDetails[])=>{
      this.coursesList =data;
    })

  
   }

   addCourse(addCourseForm){
    // TODO subscribe to addCourseDetails to view status of update.
    console.log(addCourseForm);
    this.tech={
      skillName:addCourseForm.courseTechnology
    }
    this.course={
      courseid: addCourseForm.courseId,
      courseName: addCourseForm.courseName,
      trainerName: this.mentorname,
      technology: this.tech,
      charges: addCourseForm.courseCost,
      commission:null,
      totalTime:addCourseForm.courseDuration
    }
    
    
    this.mentorService.addCourseDetails(this.course);
    this.addCourseForm.reset();
    this.coursesList.push(this.course);
    this.alertAddCourse={
      status:true,
      message :"Course Added Successfully!"
    }
    this.LoginStatus.emit(this.alertAddCourse);
    console.log("COurse Added");
   }

   deleteCourse(courseid,index){
     this.mentorService.deleteCourse(courseid).subscribe();
     this.coursesList.splice(index,1);
     this.alertDeleteCourse={
      status:false,
      message :"Course Deleted Successfully!"
     }
     this.LoginStatus.emit(this.alertAddCourse);
    console.log("Course Deleted");
   }

   saveCardDetails(cardDetail){
    this.cardData={
      cV:cardDetail.cardCV,
      cardNo:cardDetail.cardNumber,
      mM:cardDetail.cardExpM,
      yY:cardDetail.cardExpY,
      username:this.mentorname
    }
     this.userService.saveCardDetails(this.cardData);
  }

  ngOnInit() {
  }

}
