import { Area } from "./area";
import { CurrentWeather } from "./current-weather";
import { DetailForecast } from "./detail-forecast";

export class Forecast {
    current: CurrentWeather;
    daily: DetailForecast[];
    hourly: DetailForecast[];
    area: Area;

    constructor(current:CurrentWeather, daily: DetailForecast[], hourly:DetailForecast[]){
        this.current = current;
        this.daily = daily;
        this.hourly = hourly;
    }
}
