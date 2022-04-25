import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LatLng } from '../models/lat-lng';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }

  getWeatherByArea(latlng: LatLng): Observable<Forecast>{
    var params = {lat: latlng.lat, lng: latlng.lng};
    return this.http.post<Forecast>(`${environment.forecastApi}api/WeatherForecast/GetWeatherByArea`,params);
  }
}
