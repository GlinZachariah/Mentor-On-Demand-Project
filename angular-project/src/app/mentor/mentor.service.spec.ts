import { TestBed } from '@angular/core/testing';

import { MentorService } from './mentor.service';
import { HttpClientModule } from '@angular/common/http';

describe('MentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule 
    ],
    providers:[MentorService]
  }));

  it('should be created', () => {
    const service: MentorService = TestBed.get(MentorService);
    expect(service).toBeTruthy();
  });
});
