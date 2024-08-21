import { TestBed } from '@angular/core/testing';

import { StarRateService } from './star-rate.service';

describe('StarRateService', () => {
  let service: StarRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
