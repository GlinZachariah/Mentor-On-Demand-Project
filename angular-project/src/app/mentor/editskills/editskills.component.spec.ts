import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskillsComponent } from './editskills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditskillsComponent', () => {
  let component: EditskillsComponent;
  let fixture: ComponentFixture<EditskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditskillsComponent ],
      imports:[ FormsModule , ReactiveFormsModule , HttpClientModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
