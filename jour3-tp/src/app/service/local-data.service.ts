import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { interfaceArticle } from "./article"
import { catchError, Observable, of , mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  private url : string = "http://localhost:3000/articles"

  constructor(private http : HttpClient) { }

  public getAll(){
    return this.http.get(this.url) as Observable<Array<interfaceArticle>>
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

  // ng g c apres-midi/crud
}
