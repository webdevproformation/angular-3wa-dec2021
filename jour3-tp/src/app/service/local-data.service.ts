import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { interfaceArticle } from "./article"
import { catchError, Observable, of , mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  protected url : string = "";

  constructor(protected http : HttpClient ) { }

  public getAll(){
    return this.http.get(this.url) as Observable<Array<interfaceArticle>> ;
  }

  public getOne(id : number){
    return this.http.get(`${this.url}/${id}`) as Observable<interfaceArticle> ; 
  }

  public update(article :interfaceArticle){
    return (this.http.put( `${this.url}/${article.id}` , article ) as Observable<interfaceArticle>) 
            .pipe(
              mergeMap( () => this.getAll() )
            ); 
  }

  public create( article :interfaceArticle ){
    return (this.http.post(this.url , article ) as Observable<interfaceArticle>)
    .pipe( 
      catchError( ex => of(ex))
    );
  }

  public delete( id : number ){
    return this.http.delete(`${this.url}/${id}`)
    .pipe(
      mergeMap( () => this.getAll() )
    );
  } 
}
