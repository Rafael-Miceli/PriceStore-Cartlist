import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartlistListComponent } from './cartlist-list/cartlist-list.component';

const cartlistRoutes = [
  {path: 'cartlists', component: CartlistListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      cartlistRoutes // <-- debugging purposes only
    )
  ],
  declarations: [CartlistListComponent]
})
export class ProductsCartlistModule { }
