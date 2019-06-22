import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    // The path in AppRoutingModule is already set
    path: '',
    component: WeatherComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class WeatherRoutingModule { }
