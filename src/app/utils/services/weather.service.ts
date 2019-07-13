import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherDetails(lat, log) {
  // tslint:disable-next-line:max-line-length
  return this.http.get('/data/2.5/weather?lat=' + lat + '&lon=' + log + '&appid=' + environment.weatherAPIKey);
}
}
