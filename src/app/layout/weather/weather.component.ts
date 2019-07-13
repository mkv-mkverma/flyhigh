import { Router } from '@angular/router';
import { WeatherService } from './../../utils/services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  lat = 22.6847478;
  lng = 88.46320449999996;
  zoom = 17;
  country: string;
  address: string;
  state: string;
  city: string;
  postalCode: string;
  fullAddress: string;
  weatherDetails: any;
  currentDate = new Date();
  currentTemp: any;
  showClass = true;
  activeItem = 'cel';
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
    this.getGooglePlace();
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.weatherService
      .getWeatherDetails(this.lat, this.lng)
      .subscribe(data => {
        this.weatherDetails = data;
        console.log('data', data);
        if (data) {
          this.temperatureConverter('cel');
        } else {
        }
      });
  }

  temperatureConverter(key) {
    switch (key) {
      case 'cel':
        this.currentTemp = (this.weatherDetails.main.temp - 273.15).toFixed(2);
        break;
      case 'fer':
        this.currentTemp = (((this.weatherDetails.main.temp - 273.15) * 9 / 5) + 32).toFixed(2);
        break;
      default:
          this.currentTemp = (this.weatherDetails.main.temp - 273.15).toFixed(2);
          break;
    }
  }

  getGooglePlace() {
    const place = JSON.parse(sessionStorage.getItem('googlePlace'));
    if (place.geometry) {
      this.lat = place.geometry.location.lat;
      this.lng = place.geometry.location.lng;
    }

    if (place.address_components) {
      this.address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          '',
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          '',
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          ''
      ].join(' ');
    }

    console.log(this.address);

    // Location details
    this.fullAddress = place.formatted_address;
    console.log(place.formatted_address);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < place.address_components.length; i++) {
      if (place.address_components[i].types[0] === 'postalCode') {
        this.postalCode = place.address_components[i].long_name;
      }
      if (place.address_components[i].types[0] === 'locality') {
        this.city = place.address_components[i].long_name;
      }
      if (
        place.address_components[i].types[0] === 'administrative_area_level_1'
      ) {
        this.state = place.address_components[i].long_name;
      }
      if (place.address_components[i].types[0] === 'country') {
        this.country = place.address_components[i].long_name;
      }
    }
  }
}
