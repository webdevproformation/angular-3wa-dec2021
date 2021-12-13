import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeuxiemeComponent } from './deuxieme.component';
import { PremierComponent } from './premier.component';
import { NomComposantComponent } from './nom-composant/nom-composant.component';
import { TroisiemeComponent } from './troisieme.component';
import { QuatriemeComponent } from './quatrieme.component';
import { CinquiemeComponent } from './cinquieme.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    NomComposantComponent,
    TroisiemeComponent,
    QuatriemeComponent,
    CinquiemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
