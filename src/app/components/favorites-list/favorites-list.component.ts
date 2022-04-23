import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Area } from 'src/app/models/area';
import { Forecast } from 'src/app/models/forecast';
import { LatLng } from 'src/app/models/lat-lng';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
forecast: Forecast;
@Output() setForecast: EventEmitter<Forecast> = new EventEmitter();
@Input() favoriteCities: Area[]
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
   
  }

  getWeather(lat:number, lon:number, name: string, country: string){
    
    var latlng = new LatLng(lat,lon);
    var area = new Area(name,lat,lon,country);
    this.weatherService.getWeatherByArea(latlng).subscribe(res =>{
      res.area = area;
      this.setForecast.emit(res);
    }, error => {

    });
  }

}
