import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionComponent } from './commission.component';
import { FormBuilder, FormsModule, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CommissionComponent', () => {
  let component: CommissionComponent;
  let fixture: ComponentFixture<CommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionComponent ],
      imports:[ FormsModule , ReactiveFormsModule , HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
