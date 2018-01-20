import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CartlistListComponent } from './cartlist-list/cartlist-list.component';
import { AuthService } from '../auth/auth.service';

const cartlistRoutes = [
  {path: 'cartlists', component: CartlistListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      cartlistRoutes // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  declarations: [CartlistListComponent],
  providers: []
})
export class ProductsCartlistModule { }
