import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder, Validators } from '@angular/forms';
import { signUpUserForm, AlertMessage } from '../data.model';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  signUpForm;
  alertMessage:AlertMessage
  @Output() SignUpStatus = new EventEmitter<AlertMessage>();
  displayAlert =false;
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: MainService
  ) {
    this.signUpForm = this.formBuilder.group({
      userName: ['',Validators.required],
      userPassword: ['',Validators.required],
      fullName: ['',Validators.required],
      userRole: 'user',
      accountStatus: 'unlocked'
    });
    
  }

  createUser(loginData: signUpUserForm) {
    // TODO subscribe to Service to see result of createUserAccount
    console.log("CreateUser Function Executed");
    this.signUpService.createUserAccount(loginData);
    this.alertMessage = {
      status:true,
      message:"Sign Up Successful !!"
    }
    this.displayAlert = true;
    this.SignUpStatus.emit(this.alertMessage);
    console.log("CreateUser Function Executed");
  }

  ngOnInit() {
  }

}
