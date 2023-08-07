import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class EnvConfigService {


    static configuration:  any;

    constructor() { }
    static setEnvConfig(EnvConfig:any):void{
      this.configuration = EnvConfig;
    }
    static getEnvConfig() {
        return this.configuration;
    }

}
