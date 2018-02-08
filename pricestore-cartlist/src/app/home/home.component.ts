import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public envName: string = environment.envName;

  constructor() { }

  ngOnInit() {
  }

}
