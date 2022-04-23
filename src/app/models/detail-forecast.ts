import { TemperatureInfo } from "./temperature-info";
import { Weather } from "./weather";

export class DetailForecast {
    humidity: number;
    dt: number;
    pressure: number;
    wind_speed: number;
    temp: TemperatureInfo;
    weather: Weather[]

    constructor( humidity: number, dt: number, pressure: number, wind_speed: number, temp: TemperatureInfo, weather:Weather[]){
        this.humidity = humidity;
        this.dt = dt;
        this.pressure = pressure;
        this.wind_speed = wind_speed;
        this.temp = temp;
        this.weather = weather;
    }
}
