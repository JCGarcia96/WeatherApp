import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailForecast } from 'src/app/models/detail-forecast';
import{BsModalService} from 'ngx-bootstrap/modal/'
import { WeatherDetailCardComponent } from '../weather-detail-card/weather-detail-card.component';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() dailyForecast: DetailForecast;
  @Output() sendDate: EventEmitter<string> = new EventEmitter();
  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }
  formatDate(dt:number){
    return this.datepipe.transform(new Date(dt*1000),'MMM dd')!.toUpperCase()
  }

  formatDay(dt:number){
    return this.datepipe.transform(new Date(dt*1000),'EEE')!.toUpperCase()
  }
  openDetail(){
    var date = this.datepipe.transform( this.dailyForecast.dt * 1000, 'yyyy-MM-dd')!;
    this.sendDate.emit(date);
  }
}
