import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, signUpUserForm, MentorModel, Technology, SearchRequestModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoggedIn: boolean;
  LoggedInUsername: string;
  LoggedInFullname: string;
  LoggedInRole: string;
  LoggedInPwd: string;
  signUpUserObj: signUpUserForm;

  
  flag= 0;
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  performAuth(loginData) :Observable<Login>{
    return this.http.post<Login>('/api/users/performAuth',loginData);
  }

  createUserAccount(loginData: signUpUserForm) {

    this.signUpUserObj = {
      fullName: loginData.fullName,
      accountStatus: loginData.accountStatus,
      userRole: loginData.userRole,
      userName: loginData.userName,
      userPassword: loginData.userPassword
    };

    
      let obs= this.http.post<signUpUserForm>('/api/users/signUpUser',this.signUpUserObj);
      obs.subscribe();
      // obs.subscribe(
      //   val => {
      //       console.log("PUT call successful value returned in body", val);
      //   },
      //   response => {
      //       console.log("PUT call in error", response );
      //   },
      //   () => {
      //       console.log("The PUT observable is now completed.");
      //   }
      // );
      
  }


  getTechData():Observable<Technology[]>{
    return  this.http.get<Technology[]>('/api/admin/getTechnologies');
  }

  createMentorAccount(mentorCreateData){
    this.http.post('/api/mentor/signUp',mentorCreateData).subscribe();
  }

  searchTrainings(formData){
    //  TODO send mentorCreateData via HTTP POST and return status;
    
    return this.http.post('/api/mentor/searchCourse',formData);
  }

  updateTraining(progressData){
    let obs= this.http.put('/api/users/updateProgressTraining',progressData);
    obs.subscribe();
  }


}
