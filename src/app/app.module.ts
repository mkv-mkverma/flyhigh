import { AuthGuard } from './utils/guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './utils/core/httpconfig.interceptor';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ResetpasswordComponent,
    DashboardComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.googleLocationAPIKey,
      libraries: ['places']
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
