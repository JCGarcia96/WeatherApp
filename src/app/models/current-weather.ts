export class CurrentWeather {
    temp: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    
    constructor( temp: number, humidity: number, pressure: number, wind_speed: number){
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.wind_speed = wind_speed;
    }
}
