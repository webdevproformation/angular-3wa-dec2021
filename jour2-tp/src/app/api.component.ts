import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable , from } from 'rxjs';
import { map , mergeAll , toArray , take } from "rxjs/operators";

type ObsArrayArticle = Observable<Array<{id : number , userId : number , title :string , body : string}>>
// https://www.npmjs.com/package/zod
@Component({
  selector: 'api',
  template: `
  <div class="d-flex flex-wrap">
    <div *ngFor="let article of articles" class="w-50">
      <h2>{{article.titre}}</h2>
      <p>{{article.contenu}}</p>
    </div>
  </div>`
})
export class ApiComponent implements OnInit {
  private urlApi : string = "https://jsonplaceholder.typicode.com/posts";
  public articles : Array<{titre : string , contenu : string }> | undefined;
  constructor(private http :HttpClient) { }
  ngOnInit(): void {
    //const obs$ = this.http.get( this.urlApi ) as ObsArrayArticle // Observable 
    const obs$ = <ObsArrayArticle>this.http.get( this.urlApi )  // Observable 
    const obsFiltre$ = obs$.pipe(
      map( tableau => from(tableau) ) ,
      mergeAll() ,
      map( (article) => { return { titre : article.title , contenu : article.body  }} ),
      take(2),
      toArray(),
    )
    obsFiltre$.subscribe( data => this.articles = data );
  }

}
