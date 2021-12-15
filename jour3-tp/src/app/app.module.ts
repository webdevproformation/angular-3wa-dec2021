import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" ;

import { AppComponent } from './app.component';
import { AccueilComponent } from './matin/accueil.component';
import { CrudComponent } from './apres-midi/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
