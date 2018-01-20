import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const recipesRoutes = [
  {path: 'recipes', component: RecipesListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      recipesRoutes
    )
  ],
  declarations: [RecipesListComponent]
})
export class RecipesModule { }
