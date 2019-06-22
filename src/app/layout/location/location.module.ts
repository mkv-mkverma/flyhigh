import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  declarations: [
    LocationComponent
  ]
})
export class LocationModule { }
