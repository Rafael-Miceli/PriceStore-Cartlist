import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { EnvConfig } from '../env-config';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public envName: string = environment.envName;

  constructor(private envConfig: EnvConfig ) { }

  ngOnInit() {
    console.log('Envirnoment em Home ' + environment.envName);

    this.envConfig.getConfig().then((config) => {
      console.log('Config em Home ');
      console.log(config);
      this.envName = config.envName;
    });
  }

}
