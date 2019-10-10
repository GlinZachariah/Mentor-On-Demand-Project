import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprofileComponent } from './mprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MprofileComponent', () => {
  let component: MprofileComponent;
  let fixture: ComponentFixture<MprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprofileComponent ],
      imports:[ FormsModule , ReactiveFormsModule , HttpClientModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
