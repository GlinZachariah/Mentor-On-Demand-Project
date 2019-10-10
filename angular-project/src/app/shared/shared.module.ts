import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class SharedModule { }
