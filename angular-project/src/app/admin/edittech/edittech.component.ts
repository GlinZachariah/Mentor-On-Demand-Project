import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../../main.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edittech',
  templateUrl: './edittech.component.html',
  styleUrls: ['./edittech.component.css']
})
export class EdittechComponent implements OnInit {
  technologyForm;
  technologyList: Technology[];
  tech:Technology;
  constructor(
    private mainSerive: MainService,
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {
    this.technologyForm = this.formBuilder.group({
      newTechnology: ''
    });
    if (this.adminService.adminLoggedIn) {
      this.mainSerive.getTechData().subscribe((data: Technology[]) => {
        this.technologyList = data;
        console.log(this.technologyList);
      });

    }
  }

  addTechnology(data:string) {
    // TODO subscribe to Service to see result of addTech
    if(data.trim()!=''){
      this.tech={
        skillName:data
      }
      this.technologyList.push(this.tech);
      this.adminService.addTech(data);
      this.technologyForm.reset();
    }
  }

  deleteTechnology(data,index) {
    this.technologyList.splice(index,1);
    this.adminService.deleteTech(data);
  }

  ngOnInit() {}
}
