import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Zipcode } from '../models/zipcode';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(public http: HttpClient) { }

  getCityLatLng(params: {cityName: string}): Observable<City[]>{
    return this.http.get<City[]>(environment.geolocationApi + `direct?q=${params.cityName}&appId=${environment.openWeatherMapApiKey}`);
  }

  getZipCodeLatLng(params: {zipCode: string}): Observable<Zipcode>{
    return this.http.get<Zipcode>(environment.geolocationApi + `zip?zip=${params.zipCode}&appid=${environment.openWeatherMapApiKey}`);
  }
}
