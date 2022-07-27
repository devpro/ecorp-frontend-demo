import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastService } from 'src/app/backend/services/weather-forecast.service';
import { WeatherForecastModel } from 'src/app/backend/models/weather-forecast.model';

describe('WeatherForecastComponent', () => {
  const service = jasmine.createSpyObj<WeatherForecastService>('WeatherForecastService', ['list']);
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastComponent ],
      providers: [{ provide: WeatherForecastService, useValue: service }]
    })
    .compileComponents();

    service.list.and.returnValue(
      of([{ summary: 'Dummy' }] as Array<WeatherForecastModel>)
    );
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
