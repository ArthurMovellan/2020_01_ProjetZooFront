import { TestBed } from '@angular/core/testing';

import { AuthGuardPersonnelService } from './auth-guard-personnel.service';

describe('AuthGuardPersonnelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardPersonnelService = TestBed.get(AuthGuardPersonnelService);
    expect(service).toBeTruthy();
  });
});
