import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SystemInformationService } from './system-information.service';

describe('SystemInformationService', () => {
  let http: HttpTestingController;
  let service: SystemInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SystemInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
