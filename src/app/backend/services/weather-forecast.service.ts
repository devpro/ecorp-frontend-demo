import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { WeatherForecastModel } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  constructor(private http: HttpClient) { }

  list(): Observable<Array<WeatherForecastModel>> {
    const params = { };
    return this.http.get<Array<WeatherForecastModel>>(`${environment.backendUrl}weather-forecast`, { params });
  }
}
