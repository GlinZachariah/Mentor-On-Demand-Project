import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Payment } from 'src/app/data.model';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  PaymentData:Payment[];
  constructor(
    private adminService:AdminService
  ) {
    if(this.adminService.adminLoggedIn){
      this.adminService.getPaymentLog().subscribe((data:Payment[])=>{
        this.PaymentData = data;
      });
    }

  }

  ngOnInit() {
  }

}
