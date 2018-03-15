import { enableProdMode, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { EnvConfig } from './app/env-config';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

export class Main implements OnInit {

  private production: string;

  constructor(private envConfig: EnvConfig) { }

  ngOnInit() {
    const environment: string = this.envConfig.getConfig('production');

    this.production = environment;
  }

  if (production) {
    enableProdMode();
  }
