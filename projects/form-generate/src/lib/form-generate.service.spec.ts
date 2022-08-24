import { TestBed } from '@angular/core/testing';

import { FormGenerateService } from './form-generate.service';

describe('FormGenerateService', () => {
  let service: FormGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
