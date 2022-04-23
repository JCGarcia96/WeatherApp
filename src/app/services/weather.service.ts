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
    return this.http.get<Forecast>(`${environment.weatherApi}onecall?lat=${latlng.lat}&lon=${latlng.lng}&units=metric&appid=${environment.openWeatherMapApiKey}`);
  }
}
