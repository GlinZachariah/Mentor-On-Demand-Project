import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSignupComponent } from './mentor-signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
describe('MentorSignupComponent', () => {
  let component: MentorSignupComponent;
  let fixture: ComponentFixture<MentorSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSignupComponent ],
  imports: [ FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
