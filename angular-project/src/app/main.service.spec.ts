import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});
