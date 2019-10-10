import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDetails } from '../data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){
  }

  getTrainingsCompleted(username){
    //TODO send HTTP post request to getTrainingsCompleted by username and return status
    return this.http.get("/api/users/getCompletedTrainingDetails/"+username);
  }

  getUserTrainingsInProgress(usern){
    //TODO send HTTP post request to getTrainingsInProgress by username and return status
    return this.http.get("/api/users/getProgressTraining/"+usern);
  }

  updateCourseProgress(courseData){
    return this.http.put('/api/users/updateProgressTraining',courseData);
  }

  addCompletedTraining(data){
    //TODO send HTTP post request to  by username and return status
    return this.http.post('/api/users/addCompletedTrainingDetails',data);
  }

  updateCoursePayment(courseData){
   //TODO send HTTP post request to updateCoursePayment by username and return status
   return this.http.put('/api/users/updateProgressTraining',courseData);
  }

  deleteCourseProgress(courseData){
  //TODO send HTTP post request to deleteCourseProgress by username and return status

  }

  getCardDetails(username):Observable<CardDetails>{
    //TODO send HTTP post request to getCardDetails  by username and return status
    // return this.http.get('/api/users/getCardDetails/'+username);
    return this.http.get<CardDetails>('/api/users/getCardDetails/'+username);
  }
  saveCardDetails(cardData:CardDetails){
    this.http.put('/api/users/updateCardDetails',cardData).subscribe();
  }

  changeUserPwd(loggedUser,newPassword){
    return this.http.post('/api/users/newValue/'+loggedUser,newPassword)
  }
}
