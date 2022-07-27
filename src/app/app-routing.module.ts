import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherForecastComponent } from './catalog/weather-forecast/weather-forecast.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'weather-forecast', component: WeatherForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
