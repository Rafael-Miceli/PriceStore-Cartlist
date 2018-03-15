import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CartlistModule } from './cartlist/cartlist.module';
import { RecipesModule } from './recipes/recipes.module';
import { HomeComponent } from './home/home.component';
import { EnvConfig } from './env-config';

export function initConfig(config: EnvConfig) {
  return () => config.load();
}

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CartlistModule,
    RecipesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
  ],
  providers: [
    EnvConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [EnvConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
