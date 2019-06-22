import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    AgmCoreModule
  ],
  declarations: [
    WeatherComponent
  ]
})
export class WeatherModule { }
