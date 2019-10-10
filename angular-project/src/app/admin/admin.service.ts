import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Technology,signIn,Login } from '../data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminLoggedIn = false;
  isAdminLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataGen;
  tech:Technology;
  credentials:signIn;
  constructor(private http: HttpClient) {}

  performAuth(username, password, route) {
    //TODO send POST to performAuth and return the status
    this.credentials={
      username:username,
      password:password
    }
    let obs;
    obs = this.http.post('/api/admin/performAuth',this.credentials);
    obs.subscribe((data:Login) => {
      if (data.auth == true) {
        this.adminLoggedIn = true;
        route.navigate(['admin', 'permission']);
        this.isAdminLogged.next(true);
      } else {
        this.adminLoggedIn = false;
      }
    });
    return this.adminLoggedIn;
  }

  getUserPermission(){
    //TODO send POST to getUserPermission and return the status
    return this.http.get("/api/users/getUsers");
  }

  addTech(data:string){
    //TODO send POST request to addTech based on courseid and new value;
    // console.log(data +" =====================> This is technology name");
    this.tech={
      skillName:data
    }

    this.http.put('/api/admin/addTechnology',this.tech).subscribe();
 }

 deleteTech(data){
    //TODO send POST request to deleteTech based on courseid and new value;
    let obs =this.http.delete('/api/admin/deleteTechnology/'+data);
    obs.subscribe();
 }

 getCurrentCourse(){
  return this.http.get("/api/mentor/getCommissionList");
}

updateCourseCommission(courseid,newCommissionValue){
  //TODO send POST request to updateCourseCommission based on courseid and new value;
  return this.http.get("/api/mentor/updateCommission/"+courseid+"/"+newCommissionValue);
}

getPaymentLog(){
  return this.http.get("/api/users/getPaymentLog");
}

updateUserPermission(data){
 //TODO send POST request to updateUserPermission based on userdetails and return new value;
 return this.http.get('/api/users/updateUser/'+data.userName);
}

getMentorList(){
  //TODO send POST request to getMentorList
  return this.http.get("/api/users/getUsers");
}

getMentorReport(trainername){
//   var resultData:Report[]=[];
//   COMPLETED.forEach(data => {
//     if(data.coursedetail.trainername == trainername){
//       this.dataGen={
//         username:data.username,
//         courseid:data.coursedetail.courseid,
//         progress:1,
//         cost:data.coursedetail.charges
//       }
//       resultData.push(this.dataGen);
//     }
//   });

//   USERPROGRESS.forEach(data => {
//     if(data.coursedetail.trainername == trainername){
//       this.dataGen={
//         username:data.username,
//         courseid:data.coursedetail.courseid,
//         progress:data.progress,
//         cost:data.coursedetail.charges
//       }
//       resultData.push(this.dataGen);
//     }
//   });
//   return resultData;
// }
  return this.http.get("/api/mentor/getReport/"+trainername);
}
}
