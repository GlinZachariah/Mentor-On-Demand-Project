import { Component, OnInit, Input } from '@angular/core';
import { AlertMessage } from "../../data.model";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message;
  status;
  display:boolean= false;
  fail={
    backgroundColor:'#dc143c'
  }
  success={
    backgroundColor:'#32cd32'
  }
  @Input() alert:AlertMessage;
  constructor() {
    
   }

  ngOnInit() {

  }

  ngOnChanges(){
    if(this.alert != undefined){
      this.display =true;
      this.message = this.alert.message;
      this.status = this.alert.status;
    }
  }

}
