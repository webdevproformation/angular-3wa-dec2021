import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { interfacePost } from "./post"
import { interfaceComment } from "./comment"
import { Observable } from "rxjs"
import { from , of } from "rxjs";
import { take , map, mergeAll, mergeMap , toArray , takeLast, find, filter , catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // jsonplaceholder
  private urlAPI : string = "https://jsonplaceholder.typicode.com/posts"; 
  private urlcommentsAPI : string = "https://jsonplaceholder.typicode.com/comments"; 

  public constructor(private http : HttpClient) { }
  
  public getAll(){
    return this.http.get(this.urlAPI) as Observable<Array<interfacePost>>
  }

  public getListe(nb : number){
    return this.getAll().pipe(
      mergeMap(tableau => from (tableau)), // = map(  return Observable ), mergeAll()
      take(nb),
      toArray()
    )
  }

  public getLast(nb : number){
    return this.getAll().pipe( // [{},{}]
      // {}, {} ,{}
      mergeMap(tableau => from (tableau)), // = map(  return Observable ), mergeAll()
      takeLast(nb),
      toArray()
    )
  }

  public getRandom( nb : number ){
    return this.getAll().pipe(
      mergeMap( tableau => {
        tableau.sort(() => Math.random() - 0.5)
        return from (tableau)
      } ),
      take(nb),
      toArray()
    )
  }

  // from ([1,2,3])
  // 1
  // 2
  // 3

  // of([1,2,3]) xxxxx
  // [1,2,3]


  // last()
  // trouver l'opérateur / créer un opérateur qui permet de 
  // permet de retourner 2 éléments aléatoirement du tableau d'origine
  // google / https://rxjs.dev/api

  // créer un nouveau
  // https://jsonplaceholder.typicode.com/comments
  // dans la service http 
  // créer une nouvelle méthode qui permet de récupérer commentaires via son id 

  // deux solutions possibles

  // 1ère possibilité
  public getComments (id : number){
    return (this.http.get(this.urlcommentsAPI) as Observable<Array<interfaceComment>>)
            .pipe(
                mergeMap(tableau => from (tableau)),
                find( comment => { return comment.id === id})
            )
  }

  // 2ème possible 
  // https://jsonplaceholder.typicode.com/comments/1

  public getCommentsv2 (id : number){
    return (this.http.get(`${this.urlcommentsAPI}/${id}`) as Observable<interfaceComment>)
  }

  public getCommentsv3 (id : number){
    return (this.http.get(`${this.urlcommentsAPI}/${id}`) as Observable<interfaceComment>)
        .pipe( 
          catchError( ex => { return of(`erreur ${ex.status} - ${ex.statusText} pour commentaire ${id}`) })
        )
  }

}
