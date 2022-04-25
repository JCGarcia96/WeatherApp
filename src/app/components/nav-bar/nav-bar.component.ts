import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Area } from 'src/app/models/area';
import { Forecast } from 'src/app/models/forecast';
import { LatLng } from 'src/app/models/lat-lng';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchForm: FormGroup;
  area: Area;
  @Output() setWeather: EventEmitter<Forecast> = new EventEmitter();
  constructor(public weatherService: WeatherService, public geolocationService: GeolocationService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      area: new FormControl({ value: '', disabled: false }, { validators: Validators.required }),
  });
  }

  searchArea(){
    if(this.searchForm.valid){
       var area:string = this.searchForm.controls["area"].value;
      this.geolocationService.getCityLatLng({cityName: area}).subscribe(res =>{
        if(res.length === 0){
          this.geolocationService.getZipCodeLatLng({zipCode: area}).subscribe(res =>{
              var latlng = new LatLng(res.lat, res.lon)
              this.area = res;
              this.searchWeather(latlng);
          }, error =>{
          }); 
        }else{
          var areaFound = res.find(f => area.toLowerCase() == f.name.toLowerCase());
          this.area = areaFound!;
           var latlng = new LatLng(areaFound!.lat, areaFound!.lon)
           this.searchWeather(latlng);
        }
      }, error =>{
      
      });
    }
  }

  searchWeather(latlng: LatLng){
    this.weatherService.getWeatherByArea(latlng).subscribe(res => {
      res.area = this.area;
      this.setWeather.emit(res);
    },error => {

    });
  }

}
