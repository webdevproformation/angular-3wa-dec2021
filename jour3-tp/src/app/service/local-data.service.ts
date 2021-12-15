import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { interfaceArticle } from "./article"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  private url : string = "http://localhost:3000/articles"

  constructor(private http : HttpClient) { }

  public getAll(){
    return this.http.get(this.url) as Observable<Array<interfaceArticle>>
  }

  // ng g c apres-midi/crud
}
