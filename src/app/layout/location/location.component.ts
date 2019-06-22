import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat: number;
  lng: number;
  zoom = 17;
  country: string;
  address: string;
  state: string;
  city: string;
  postalCode: string;
  fullAddress: string;
  currentLocation: string;
  isSearchFound = false;
  @ViewChild('addressSearch')
  public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
  ) { }

  ngOnInit() {
    // load Places Autocomplete
    sessionStorage.removeItem('googlePlace');
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          sessionStorage.setItem('googlePlace', JSON.stringify(place));
          if (place.geometry) {
            this.router.navigate(['/weather']);
            this.isSearchFound = false;
          }
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            // If response is null
            // window.alert("Autocomplete's returned place contains no geometry");
            this.isSearchFound = true;
            return;
          }
        });
      });
    });
  }

  onEnterLocation(value: string) {
    console.log(value);
  }
  onEnterClick(value: string) {
    console.log(value);
  }

  public setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          const geocoder = new google.maps.Geocoder();
          const latlng = new google.maps.LatLng(this.lat, this.lng);
          // tslint:disable-next-line:object-literal-key-quotes
          geocoder.geocode({ 'location': latlng }, (place, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              if (place[0] != null) {
                this.ngZone.run(() => {
                  sessionStorage.setItem('googlePlace', JSON.stringify(place[0]));
                  if (place[0].geometry) {
                    this.router.navigate(['/weather']);
                  }
                });
              } else {
                alert('No address available');
              }
            }
          });
        },
        error => {
          console.log('Error code: ' + error.code + '<br /> Error message: ' + error.message);
        }
      );
    }
  }


}
