import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartlistListComponent } from './cartlist-list/cartlist-list.component';
import { AuthService } from '../auth/auth.service';
import { AddToListComponent } from './add-to-list/add-to-list.component';

const cartlistRoutes = [
  {path: 'cartlists', component: CartlistListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      cartlistRoutes
    )
  ],
  declarations: [CartlistListComponent, AddToListComponent],
  providers: []
})
export class CartlistModule { }
