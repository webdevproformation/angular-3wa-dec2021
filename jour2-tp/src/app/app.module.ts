import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TwoWayComponent } from './two-way.component';
import { ArticleComponent } from './article.component';
import { LikeComponent } from './like.component';
import { RxjsComponent } from './rxjs.component';
import { CreerObservableComponent } from './creer-observable.component';
import { Exo1Component } from './exo1.component';
import { FormationComponent } from './formation.component';
import { OperateursComponent } from './operateurs.component';
import { Exo2Component } from './exo2.component';
import { ApiComponent } from './api.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    ArticleComponent,
    LikeComponent,
    RxjsComponent,
    CreerObservableComponent,
    Exo1Component,
    FormationComponent,
    OperateursComponent,
    Exo2Component,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
