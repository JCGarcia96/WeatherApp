import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Area } from 'src/app/models/area';
import { Forecast } from 'src/app/models/forecast';
import { ForecastHourlyDetailComponent } from '../modals/forecast-hourly-detail/forecast-hourly-detail.component';
import { WeatherDetailCardComponent } from '../weather-detail-card/weather-detail-card.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() forecast!: Forecast;
  dataLoaded = false;
  favorited: boolean;
  favoriteCities: Area[];
  constructor(public datepipe: DatePipe, public dialog: BsModalService) { }

  ngOnInit(): void {
    this.favoriteCities = JSON.parse(localStorage.getItem('favoritedAreas')!) ?? []
  }

  ngOnChanges():void{
    this.dataLoaded = (typeof this.forecast !== "undefined");
    this.checkIfFavorited();
  }
 

  toggleFav(){
    if(!this.favorited){
      this.favoriteCities.push(this.forecast.area);
      localStorage.setItem('favoritedAreas', JSON.stringify(this.favoriteCities));
    }else{
      this.favoriteCities = this.favoriteCities.filter(f => f.name !== this.forecast.area.name || f.country !== this.forecast.area.country);
      console.log(this.favoriteCities);
      localStorage.setItem('favoritedAreas', JSON.stringify(this.favoriteCities));
    }
    this.favorited = !this.favorited;
  }

  checkIfFavorited(){
    if(this.dataLoaded){
      this.favorited = this.favoriteCities.some(s => s.name === this.forecast.area.name && s.country === this.forecast.area.country);
    }
  }

  refreshWeather(forecast:Forecast){
    
    this.forecast = forecast;
    this.dataLoaded = true;
    this.checkIfFavorited();
  }

  openDetail(date: string){
    var hourlyDetail = this.forecast.hourly.filter(f => this.datepipe.transform(f.dt * 1000, 'yyyy-MM-dd HH:mm:ss')?.includes(date))
    var initialState = {
      dayInfo: hourlyDetail
    }
    this.dialog.show(ForecastHourlyDetailComponent,{
      initialState
    })
  }

}
