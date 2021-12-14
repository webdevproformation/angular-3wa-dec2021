import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TwoWayComponent } from './two-way.component';
import { ArticleComponent } from './article.component';
import { LikeComponent } from './like.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    ArticleComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
