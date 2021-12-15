import { Component, OnInit } from '@angular/core';
import { HttpService } from "../service/http.service";
import { interfacePost } from '../service/post';


@Component({
  selector: 'accueil',
  template: `
    <div class="row">
      <article class="col-4" *ngFor="let article of articles"> 
        <h2 class="fs-4">{{article.title}}</h2>
        <p>{{article.body}}</p>
      </article> 
    </div> 
  `
})
export class AccueilComponent implements OnInit {
  public articles : Array<interfacePost> | undefined ;
  public constructor(private postService : HttpService) { }
  ngOnInit(): void {
    this.postService.getRandom(4)
    .subscribe( data => this.articles = data )
  }

}
