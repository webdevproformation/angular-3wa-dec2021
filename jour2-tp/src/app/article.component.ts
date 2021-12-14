import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h2>{{ data.titre }}</h2>
    <p>{{ data.contenu }}</p>
    <like 
        [nb]="data.like" 
        (augmenter)="augmenterLike($event)" 
        (diminuer)="diminuerLike()" 
    ></like>
  `
})
export class ArticleComponent implements OnInit {
  public diminuerLike(){
    if(this.data.like > 0){
      this.data.like--; 
    }
  }

  public augmenterLike($event:number){
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
