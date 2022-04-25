import { Area } from "./area";

export class City extends Area {

    state: string;

    constructor(name: string, lat:number, lon:number,country:string,state:string){
        super(name,lat,lon,country);
        this.state = state;
    }
}
