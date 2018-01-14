import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsCartlistModule } from './products-cartlist/products-cartlist.module';
import { CartlistListComponent } from './cartlist-list/cartlist-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CartlistListComponent
  ],
  imports: [
    BrowserModule,
    ProductsCartlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
