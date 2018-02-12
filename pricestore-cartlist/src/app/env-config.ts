import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnvConfig {

    public config: any;

    constructor(private http: Http) {
        this.http.get('assets/env-config.json')
        .map(res => res.json())
        .toPromise()
        .then((config) => {
            // do stuff with the config
            console.log('Em EnvConfig ');
            console.log(config);

            this.config = config;
        });
    }

    public getConfig(): Promise<any> {
        return this.http.get('assets/env-config.json')
        .map(res => res.json())
        .toPromise();
    }
}
