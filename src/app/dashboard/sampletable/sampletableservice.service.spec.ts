import { TestBed, inject } from '@angular/core/testing';

import { SampletableserviceService } from './sampletableservice.service';

describe('SampletableserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampletableserviceService]
    });
  });

  it('should be created', inject([SampletableserviceService], (service: SampletableserviceService) => {
    expect(service).toBeTruthy();
  }));
});
