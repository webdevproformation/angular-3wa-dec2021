import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h2>{{ data.titre }}</h2>
    <p>{{ data.contenu }}</p>
    <like [nb]="data.like" (augmenter)="augmenterLike($event)" ></like>
  `
})
export class ArticleComponent implements OnInit {

  augmenterLike($event:number){
    console.log($event);
    this.data.like++; 
  }

  public data = {
    titre : "Article 1",
    contenu : "lorem ipsum",
    like : 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
