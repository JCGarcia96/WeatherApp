export class TemperatureInfo {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;

    constructor( day: number, eve: number, max: number, min: number, morn: number, night: number,){
        this.day = day;
        this.eve = eve;
        this.max = max;
        this.min = min;
        this.morn = morn;
        this.night = night;
    }
}
