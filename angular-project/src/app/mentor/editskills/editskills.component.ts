import { Component, OnInit } from '@angular/core';
import { Technology } from '../../data.model';
import { MainService } from '../../main.service';
import { MentorService } from '../mentor.service';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

export interface displayMentorSkills{
  skills:Technology;
  isMentorSkill :boolean;
}


@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent implements OnInit {
  allSkills: Technology[];
  selectedSkills :Technology[];
  mentorList:displayMentorSkills[];
  mentorItem:displayMentorSkills;
  isLoaded:boolean;
  skillForm;
  skill:Technology;
  result:Technology[]=[];
  constructor(
    private mainService : MainService,
    private mentorService : MentorService,
    private formBuilder:FormBuilder
  ) {
    this.isLoaded =false;
    this.mentorList=[];
    this.skillForm =this.formBuilder.group({
      skills:''
    });
    
    this.mentorService.getMentorSkills(mainService.LoggedInUsername).subscribe((newdata:Technology[])=>{
    this.selectedSkills=newdata;
    this.mainService.getTechData().subscribe((data: Technology[]) => {
        this.allSkills = data;
        this.isLoaded= true;
        this.allSkills.forEach(element => {
          this.mentorItem={
            skills:{skillName:''},
            isMentorSkill:false
          }
           this.mentorItem.skills.skillName =element.skillName;
          //  console.log(this.mentorItem+"=>>>>>>>>>>>>"+element.skillName);
           for(let i=0;i<this.selectedSkills.length;i++){
            if(this.selectedSkills[i].skillName == element.skillName){
              this.mentorItem.isMentorSkill = true;
              break;
              }
            }
          // console.log(this.mentorItem);
          this.mentorList.push(this.mentorItem);
        });
      });

      
    });
   }


   updateSkills(data:string[]){
     data.forEach((tech)=>{
       this.skill={
         skillName:tech
       }
       this.result.push(this.skill);
     })
      this.mentorService.updateMentorSkills(this.result,this.mainService.LoggedInUsername).subscribe();
   }

  ngOnInit() {
    
     }

}
