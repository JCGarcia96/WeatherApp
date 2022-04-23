import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailForecast } from 'src/app/models/detail-forecast';
import { TemperatureInfo } from 'src/app/models/temperature-info';

import { WeatherDetailCardComponent } from './weather-detail-card.component';

describe('WeatherDetailCardComponent', () => {
  let component: WeatherDetailCardComponent;
  let fixture: ComponentFixture<WeatherDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailCardComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
    component.hourInfo = new DetailForecast(0,0,0,0,new TemperatureInfo(0,0,0,0,0,0),[]);
  });

  beforeEach(() => {
    component.hourInfo = new DetailForecast(0,0,0,0,new TemperatureInfo(0,0,0,0,0,0),[]);
    fixture = TestBed.createComponent(WeatherDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
