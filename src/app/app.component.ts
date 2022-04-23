import { Component } from '@angular/core';
import { Forecast } from './models/forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherAppTrimble';
  forecast: Forecast;
  sendForecast(forecast: Forecast){
    this.forecast = forecast;
  }
}
