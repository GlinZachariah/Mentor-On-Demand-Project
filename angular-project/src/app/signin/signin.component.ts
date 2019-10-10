import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { signIn, AlertMessage, Login ,signUpUserForm} from '../data.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formDataValue;
  data: signIn;
  alert:AlertMessage;
  @Output() LoginStatus = new EventEmitter<AlertMessage>();
  
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: MainService
  ) {
    this.formDataValue = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  checkUser(formData: signIn) {
    // this.authService.performAuth(formData);
    
    let obs =this.authService.performAuth(formData);
    obs.subscribe((JSONResponse: Login) => {
      console.log(JSONResponse);
      if (JSONResponse.auth === true) {
        this.authService.LoggedInRole = JSONResponse.role;
        this.authService.isLoggedIn = true;
        this.authService.LoggedInUsername = formData.username;
        this.authService.LoggedInFullname = JSONResponse.fullname;
        this.authService.LoggedInPwd = formData.password;
        if (this.authService.isLoggedIn && this.authService.LoggedInRole == 'user') {
          this.route.navigate([this.authService.LoggedInRole, 'profile']);
          this.authService.isUserLoggedIn.next(true);
        } else if (this.authService.isLoggedIn && this.authService.LoggedInRole === 'mentor') {
          this.route.navigate([this.authService.LoggedInRole, 'home']);
          this.authService.isUserLoggedIn.next(true);
        } else {         
          console.log('LOGIN FAILED' + this.authService.isLoggedIn + this.authService.LoggedInRole);
        }
      }else{
        if(!this.authService.isLoggedIn){
          this.alert={
            status:false,
            message :"Invalid Credentials"
          }
          this.LoginStatus.emit(this.alert);
        }
      }
    });
    
    this.formDataValue.reset();
  }

  ngOnInit() {}

  
}
