import { Component, OnInit } from '@angular/core';
import { MentorService } from "../mentor.service";
import { MentorProgress } from '../../data.model';
import { MainService } from "../../main.service";

@Component({
  selector: 'app-mprogress',
  templateUrl: './mprogress.component.html',
  styleUrls: ['./mprogress.component.css']
})
export class MprogressComponent implements OnInit {
  progressData:MentorProgress[];
  constructor(
    private authService:MainService,
    private mentorService:MentorService,

  ) {
    if(this.authService.isLoggedIn){
     let obs = this.mentorService.getMentorProgress(this.authService.LoggedInUsername);
     obs.subscribe((data:MentorProgress[])=>{
         this.progressData = data;
      });
    }
   }

  ngOnInit() {
  }

}
