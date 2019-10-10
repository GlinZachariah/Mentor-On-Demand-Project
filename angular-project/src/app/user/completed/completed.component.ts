import { Component, OnInit } from '@angular/core';
import { TrainingCompleted, UserCompleted } from 'src/app/data.model';
import { MainService } from 'src/app/main.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  trainingCompletedData:UserCompleted[];
  loggedUser:string;
  constructor(
    private updateService:UserService,
    private authService :MainService
  ) {
    if(this.authService.isLoggedIn){
      this.updateService.getTrainingsCompleted(this.authService.LoggedInUsername).subscribe((data:UserCompleted[]) =>{
        this.trainingCompletedData = data;
      });
    }
  }

  ngOnInit() {
  }

}
