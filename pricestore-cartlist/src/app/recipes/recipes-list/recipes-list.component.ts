import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../entities/Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

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

  componentAdicionarNaLista(recipe: string): void {
    console.log('Abrir component de adicionar em lista ingredientes do ', recipe);
  }

}
