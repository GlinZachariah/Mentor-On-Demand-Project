import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SearchTrainingResult, SearchResponseModel, UserProgress } from '../data.model';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() resultData: SearchResponseModel[];
  results;
  userTraining:UserProgress;
  constructor(private mainService: MainService, private route: Router) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.results = changes['resultData'].currentValue;
  }

  proposeTraining(Idx, result: SearchResponseModel) {
    document.getElementById(Idx).click();
    if (!this.mainService.isLoggedIn) {
      // console.log(document.getElementById(Idx));
      this.route.navigate(['signin']);
    } else {
      this.userTraining={
        courseId:result.courseId,
        userName: this.mainService.LoggedInUsername ,
        progress: 0,
        rating:0,
        paymentStatus: 'NA',
        courseStatus: 'Under Review' ,
        timeSlot: result.timeSlot,
        startDate: result.startDate,
        courseName:null,
        technology:null,
        trainerName:null
      }
      this.mainService.updateTraining(this.userTraining);
    }
  }
}
