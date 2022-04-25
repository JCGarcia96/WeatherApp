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
    return this.http.get<City[]>(environment.forecastApi + `api/Geolocation/GetCityLatLng?cityName=${params.cityName}`);
  }

  getZipCodeLatLng(params: {zipCode: string}): Observable<Zipcode>{
    return this.http.get<Zipcode>(environment.forecastApi + `api/Geolocation/GetZipCodeLatLng?zipCode=${params.zipCode}`);
  }
}
