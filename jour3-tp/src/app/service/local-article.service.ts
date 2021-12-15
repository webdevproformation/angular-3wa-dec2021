import { Injectable } from '@angular/core';
import { LocalDataService } from "./local-data.service"
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocalArticleService extends LocalDataService {

  constructor( http:HttpClient ) {
    super( http )
    this.url = "http://localhost:3000/articles"; 
  }
}
