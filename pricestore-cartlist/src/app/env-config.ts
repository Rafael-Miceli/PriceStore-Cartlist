import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnvConfig {

    private config: Object = null;
    private env: Object = null;

    constructor(private http: Http) {

    }

    /**
     * Use to get the data found in the second file (config file)
     */
    public getConfig(key: any) {
        return this.config[key];
    }

    /**
     * Use to get the data found in the first file (env file)
     */
    public getEnv(key: any) {
        return this.env[key];
    }


    /**
 * This method:
 *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
 *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
 */
    public async load() {
        await this.http.get('assets/env-config.json').map(res => res.json()).catch((error: any): any => {
            console.log('Configuration file "assets/env-config.json" could not be read');

        }).toPromise().then(envResponse => {

            this.config = this.env = envResponse;
        });

        return this.config;
    }
}
