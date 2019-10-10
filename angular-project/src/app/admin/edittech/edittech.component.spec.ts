import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittechComponent } from './edittech.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('EdittechComponent', () => {
  let component: EdittechComponent;
  let fixture: ComponentFixture<EdittechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittechComponent ],
      imports:[ FormsModule , ReactiveFormsModule , HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
