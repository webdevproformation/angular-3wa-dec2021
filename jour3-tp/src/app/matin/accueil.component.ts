import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class AccueilComponent implements OnInit, OnDestroy {
  public articles : Array<interfacePost> | undefined ;
  public constructor(private postService : HttpService) { }
  public subscribe$ : any;
  
  ngOnDestroy(): void {
      this.subscribe$.unsubscribe()
  }

  ngOnInit(): void {
    this.subscribe$ = this.postService.getRandom(4)
    .subscribe( data => this.articles = data )

    this.postService.getCommentsv3(12).subscribe(
      console.log 
    )
    // catchError // throwError
    // 10h51 bon café !!! 

    this.postService.getArticleComplet(1).subscribe( console.log ); 
  }

}
