import { HeaderComponent } from './../utils/components/header/header.component';
import { FooterComponent } from './../utils/components/footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
