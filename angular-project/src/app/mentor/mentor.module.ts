import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { MprofileComponent } from './mprofile/mprofile.component';
import { MprogressComponent } from './mprogress/mprogress.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeslotPipe } from './timeslot.pipe';



@NgModule({
  declarations: [HomeComponent, EditskillsComponent, MprofileComponent, MprogressComponent, HistoryComponent, CalendarComponent, TimeslotPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[TimeslotPipe],
})
export class MentorModule { }
