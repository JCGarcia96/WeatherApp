import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DetailForecast } from 'src/app/models/detail-forecast';

@Component({
  selector: 'app-weather-detail-card',
  templateUrl: './weather-detail-card.component.html',
  styleUrls: ['./weather-detail-card.component.css']
})
export class WeatherDetailCardComponent implements OnInit {
 @Input() hourInfo: DetailForecast
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    console.log(this.hourInfo);
  }
  formatDate(dt:number){
    return this.datepipe.transform(new Date(dt*1000),'MMM dd')!.toUpperCase()
  }
  formatHour(dt:number){
    return this.datepipe.transform(new Date(dt*1000),'HH:mm')!.toUpperCase()
  }
}
