import { Component, Input, OnInit } from '@angular/core';
import { DetailForecast } from 'src/app/models/detail-forecast';
import { LatLng } from 'src/app/models/lat-lng';

@Component({
  selector: 'app-forecast-hourly-detail',
  templateUrl: './forecast-hourly-detail.component.html',
  styleUrls: ['./forecast-hourly-detail.component.css']
})
export class ForecastHourlyDetailComponent implements OnInit {
  @Input() dayInfo: DetailForecast[];
  hasInfo = false;
  constructor() { }

  ngOnInit(): void {
    this.hasInfo = this.dayInfo.length > 0;
  }

}
