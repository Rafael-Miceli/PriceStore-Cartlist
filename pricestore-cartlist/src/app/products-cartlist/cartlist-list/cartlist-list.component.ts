import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../entities/Recipe';

@Component({
  selector: 'app-cartlist-list',
  templateUrl: './cartlist-list.component.html',
  styleUrls: ['./cartlist-list.component.css']
})
export class CartlistListComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [{
      name: 'Strogonoff',
      ingredients: null
    },
    {
      name: 'Peixe Frito',
      ingredients: null
    },
    {
      name: 'Salpicão',
      ingredients: null
    },
    {
      name: 'Chop Suey',
      ingredients: null
    }];
  }

}
