import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    // The path in AppRoutingModule is already set
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'weather',
        loadChildren: './weather/weather.module#WeatherModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#LocationModule'
      }
    ]
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
export class LayoutRoutingModule { }
