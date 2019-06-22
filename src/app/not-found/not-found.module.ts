import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    NotFoundRoutingModule,
    RouterModule,
    CommonModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
