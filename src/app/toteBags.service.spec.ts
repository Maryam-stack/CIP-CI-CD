import { TestBed } from '@angular/core/testing';

import { ToteBagsService } from './toteBags.service';

describe('ToteBagsService', () => {
  let service: ToteBagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToteBagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
