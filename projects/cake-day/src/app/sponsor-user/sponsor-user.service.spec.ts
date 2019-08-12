import { TestBed } from '@angular/core/testing';

import { SponsorUserService } from './sponsor-user.service';

describe('SponsorUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SponsorUserService = TestBed.get(SponsorUserService);
    expect(service).toBeTruthy();
  });
});
