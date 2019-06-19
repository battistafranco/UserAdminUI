import { TestBed } from '@angular/core/testing';

import { ApiMethodsService } from './api-methods.service';

describe('ApiMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMethodsService = TestBed.get(ApiMethodsService);
    expect(service).toBeTruthy();
  });
});
