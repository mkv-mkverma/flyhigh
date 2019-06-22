import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const WEATHER_APP_KEY = 'dd5b971ebcd60357d6cab6e46ff658a9';
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) { }

  // login(data) {
  //   // data = { email: 'admin@example.com', password: 'Test@123' };
  //   data = {
  //     email: 'eve.holt@reqres.in',
  //     password: 'cityslicka'
  // };
  //   return this.http.post('https://reqres.in/api/login', data);
// }
getCustomerDetails(lat, log) {
  // tslint:disable-next-line:max-line-length
  return this.http.get('/data/2.5/weather?lat=' + lat + '&lon=' + log + '&appid=' + WEATHER_APP_KEY);
}
}
