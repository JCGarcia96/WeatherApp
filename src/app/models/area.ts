export class Area {
    name: string;
    lat: number;
    lon: number;
    country: string;

    constructor(name:string, lat:number,lon:number,country:string){
        this.name=name;
        this.lat=lat;
        this.lon=lon;
        this.country=country;
    }
}
