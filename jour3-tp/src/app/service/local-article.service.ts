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

// idéal => rapidement petit projet et le mettre en ligne 
// volume d'utilisation qui est gratuit
// payant 

// MongoDB Atlas => petit base de données en ligne qui taille maximum => payant 

// SQL => NoSQL 
// { nom : "Alain" , adresse : 1234567}

// {id : 1234567 , rue : } 

// jointure INNER JOIN 
// {  id => populate (table => id ) }
// https://mongoosejs.com/docs/populate.html

// MySQL PostGre
// SELECT * FROM client  as c
// JOIN adresse as a
// ON a.id = c.id_adresse

// MongoDB 

/**
[ // collection
  { id : 1 , nom :"Alain" , refAdresse : 12345 }, // Document
  { id : 2 , nom :"Alain" , refAdresse : 12346 },
  { id : 3 , nom :"Alain" , refAdresse : 12347 },
],
[ // collection
  { id : 12345 , rue :"rue de Paris" , ville : "Marseille" }, // Document
]

 */

// Firebase 




