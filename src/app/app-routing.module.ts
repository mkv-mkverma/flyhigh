import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils';
const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: './layout/layout.module#LayoutModule'
  // },
  {
    path: 'login-page',
    loadChildren: './login/login.module#LoginModule'
  },
  // {
  //   path: 'weather',
  //   loadChildren: './layout/weather/weather.module#WeatherModule'
  // },
  // {
  //   path: 'location',
  //   loadChildren: './layout/location/location.module#LocationModule'
  // },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
