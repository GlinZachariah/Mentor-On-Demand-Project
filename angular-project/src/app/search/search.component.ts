import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';
import { TIMESLOT } from '../data';
import { Technology, SearchResponseModel } from '../data.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchForm;
  timeSlots = TIMESLOT;
  mentorSkills: Technology[];
  searchResult;
  constructor(
    private formBuilder: FormBuilder,
    private searchService: MainService
  ) {
    this.searchService.getTechData().subscribe((data: Technology[]) => {
      this.mentorSkills = data;
    });
    this.SearchForm = this.formBuilder.group({
      technology: '',
      startDate: '',
      timeSlot: ''
    });
   }

   SearchTrainer(formData){
      this.searchService.searchTrainings(formData).subscribe((data:SearchResponseModel[])=>{
        this.searchResult =data;
        console.log("This is the data ");
        console.log(data);
      });
   }

  ngOnInit() {
  }

}
