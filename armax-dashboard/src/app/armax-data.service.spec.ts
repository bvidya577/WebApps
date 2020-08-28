import { TestBed } from '@angular/core/testing';

import { ArmaxDataService } from './armax-data.service';

describe('ArmaxDataService', () => {
  let service: ArmaxDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmaxDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
