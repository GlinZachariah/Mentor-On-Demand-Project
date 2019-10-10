import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { UserService } from '../user.service';
import { FormsModule,FormBuilder } from '@angular/forms';
import { AlertMessage,CardDetails } from "../../data.model";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  loggedPwd;
  cardDetailsValue;
  cardDetails;
  cardData:CardDetails;
  editDetails;
  alertMessage: AlertMessage;
  val1:string;
  val2:number;
  val3:number;
  val4:number;
  formSaved=false;
  constructor(
    private authService:MainService,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) {
    if(this.authService.isLoggedIn){
      this.loggedUser = this.authService.LoggedInUsername;
      this.loggedPwd = this.authService.LoggedInPwd;
      // TODO save the getcardDetails value into the cardDetailsValue property and display if null dont update
      let obs = this.userService.getCardDetails(this.loggedUser);
      obs.subscribe((data:CardDetails)=>{
        // console.log("CardNumber =>"+ data.cardNo+"<=>"+data.username+"<=>"+data.mM);
        this.val1 = data.cardNo;
        if(this.val1!=''){
          this.val2 = data.mM;
          this.val3 = data.yY;
          this.val4 = data.cV;
        }
        this.cardDetails = this.formBuilder.group({
          cardNumber:this.val1,
          cardExpM:this.val2,
          cardExpY:this.val3,
          cardCV:this.val4
        });
      });
     
      // console.log("CardNumber =>"+ this.val1);
      this.editDetails = this.formBuilder.group({
        fullname:'',
        password:''
      });

        // this.alertMessage={
        //   status:true,
        //   message :"Login Success"
        // }
        // this.LoginStatus.emit(this.alert);
      
    }
  }

  updateProfile(newPassword){
    //TODO send POST request to change username and password and subscribe to obtain status
    let obs =this.userService.changeUserPwd(this.loggedUser,newPassword);
    obs.subscribe();

  }

  saveCardDetails(cardDetail){
    // this.formSaved = true;
    // this.alertMessage ={
    //   status :true,
    //   message:'Details Saved'
    // }
    this.cardData={
      cV:cardDetail.cardCV,
      cardNo:cardDetail.cardNumber,
      mM:cardDetail.cardExpM,
      yY:cardDetail.cardExpY,
      username:this.loggedUser
    }
     //TODO send POST request to change username and password and subscribe to obtain status
     this.userService.saveCardDetails(this.cardData);
  }

  ngOnInit() {
  }

}
