import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {
  let http: HttpTestingController;
  let service: WeatherForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
