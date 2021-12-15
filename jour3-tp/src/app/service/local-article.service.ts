import { Injectable } from '@angular/core';
import { LocalDataService } from "./local-data.service"
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocalArticleService extends LocalDataService {

  constructor( http:HttpClient ) {
    super( http ) ;
    this.url = "http://localhost:3000/articles"; 
  }

}

// Firebase ??? => sur internet 
// service de google 
// facile à mettre 
// interface visuelle => pour gérer votre base de données en temps réel
//                    => système d'authentification => base de données spéciales créer un compte 
//                    et s'authentifier + 
//                    profil gmail => 
