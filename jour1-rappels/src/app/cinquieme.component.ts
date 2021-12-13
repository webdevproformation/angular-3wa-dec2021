import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "./articles.service";
import {interfaceArticle} from "./article"

@Component({
  selector: 'cinquieme',
  template: `
  <div>
    <article *ngFor="let article of articles">
      <h2>{{ article.titre }}</h2>
      <p>{{ article.contenu }}</p>
      <ul>
      <li *ngFor="let tag of article.tags">{{tag}}</li>
      </ul>
    </article>
  <div>
  `,
  styles: [
    `div{
      display:grid;
      grid-template-columns : repeat(2,1fr);
      gap : 10px;
    }`
  ]
})
export class CinquiemeComponent implements OnInit {
  public articles : Array<interfaceArticle>
  public constructor( 
      public articleService : ArticlesService , 
  ) { 
    this.articles = [];
  }

  ngOnInit(): void {
    this.articles = this.articleService.data;
  }

}
