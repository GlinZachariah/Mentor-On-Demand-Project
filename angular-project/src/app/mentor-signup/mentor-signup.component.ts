import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { signUpUserForm, Technology, AlertMessage, MentorModel } from '../data.model';
import { MainService } from '../main.service';
import { TIMEZONE, TIMESLOT } from '../data';

export let technologies :Technology[]=[];
@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})


export class MentorSignupComponent implements OnInit {
  formMentor;
  materialTypes: string[];
  materialType: FormGroup;
  mentorSkills: Technology[];
  timeZones =TIMEZONE;
  timeSlots =TIMESLOT;
  mentorData:MentorModel;
  alertMessage:AlertMessage;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();


   constructor(
    private mainService : MainService,
    private formBuilder: FormBuilder
  ) {
    this.mainService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.formMentor = this.formBuilder.group({
      username: '',
      fullname: '',
      linkedInUrl: '',
      experience: '',
      password: '',
      timeSlotControl: '',
      timeZoneControl: '',
      mentorSkillControl: ''
    });

    this.materialType = new FormGroup({
      video: new FormControl(),
      blog: new FormControl(),
      ppt: new FormControl(),
      demo: new FormControl()
    });
  }

  signUpMentor(signUpData, materialTypeData) {
    
    signUpData.mentorSkillControl.forEach(element => {
      technologies.push(element);
    });

    this.mentorData ={
      userName:signUpData.username,
      accountStatus:'unlocked',
      fullName:signUpData.fullname,
      userPassword :signUpData.password,
      userRole:'mentor',
      timezone:signUpData.timeZoneControl,
      timeslot: parseInt(signUpData.timeSlotControl),
      linkedInURL:signUpData.linkedInUrl,
      experience:signUpData.experience,
      courseTypeBlog:materialTypeData.blog||false,
      courseTypePPT:materialTypeData.ppt||false,
      courseTypeVideo:materialTypeData.video||false,
      courseTypeDemo:materialTypeData.demo||false,
      skills:technologies
    }
    
    this.mainService.createMentorAccount(this.mentorData);
    this.alertMessage ={
      status:true,
      message:'Signed Up Successfully !'
    }
    this.LoginStatus.emit(this.alertMessage);
    console.log("CreateMentor Function Executed");
  }

  ngOnInit() {
  }

}
