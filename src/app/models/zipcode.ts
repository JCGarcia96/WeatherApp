import { Area } from "./area";

export class Zipcode extends Area {
    zipcode: string;
    

    
    constructor(zipcode:string,name:string,lat:number,lon:number,country:string) {
        super(name,lat,lon,country);
        this.zipcode = zipcode;
    }
}
