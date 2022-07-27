import { Component, OnInit } from '@angular/core';

import { WeatherForecastModel } from 'src/app/backend/models/weather-forecast.model';
import { WeatherForecastService } from 'src/app/backend/services/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  forecasts: WeatherForecastModel[] = [];

  constructor(private weatherForecastService: WeatherForecastService) { }

  ngOnInit(): void {
    this.weatherForecastService.list().subscribe(models => (this.forecasts = models));
  }
}
