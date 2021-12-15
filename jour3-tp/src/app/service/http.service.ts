import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { interfacePost } from "./post"
import { Observable } from "rxjs"
import { from } from "rxjs";
import { take , map, mergeAll, mergeMap , toArray} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // jsonplaceholder
  private urlAPI : string = "https://jsonplaceholder.typicode.com/posts"; 

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

  // last()

}
