import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInData;
  isLoggedIn: boolean;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: Router
  ) {
    this.signInData = this.formBuilder.group({
      username:  ['', Validators.required],
      password:  ['', Validators.required]
    });
  }

  checkAdmin(data){
     this.submitted = true;
    // stop here if form is invalid
    if (this.signInData.invalid) {
        return;
    }
    this.isLoggedIn = this.adminService.performAuth(data.username,data.password,this.route);
    this.signInData.reset();
  }

  ngOnInit() {}
}
