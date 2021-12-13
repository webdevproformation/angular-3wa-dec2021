let a = "valeur" ; // typescript + visual Studio 
                  // typage automatique / inférence
// a = 2 ; 

// typer vos variables / fonction via une annotation 
let b : number  = 10 ; 

// b = "hello"; 

// typage de base => typage primitif

const c : string = "bonjour";
const e : number = 12 ;
const f : boolean = true ; 

let g : undefined ; 
let h : unknown ; // par la suite que l'on va pouvoir la définir 
let i : any ; // javascript 

i = 3 ;
i = "bonjour";
i = false ;

// typage par assertion ??? 

let k : unknown ; // variable existe MAIS je suis incapable de lui définir ce type

(k as number) = 30 ;  // typage via le mot clé (variable as type)  

// rxjs + requête en base de données 

// utilisable avec unknown 

let l : null ; 

// 7 types de base 

// types avancé pour les variables scalaires tableau et ou les objets 
// générique 
let jours : Array<string> = ["lundi", "mardi", "mercredi"] ;

let saison : string[] = ["été", 'automne', "hiver"]; 

// pour les objets 

let etudiant : Object  = { prenom : "Alain" , age : 12 };

let formation : {} = { nom : "w3A", duree : 12} ; 

// interface décrire votre objet => décrire ses membres 

interface interfaceFormation {
    nom : string ,
    duree : number 
}

interface interfaceEtudiant {
    nom : string ;
    duree : number  ;
}


let etudiant2 : interfaceEtudiant = { nom : "Béatrice" , duree : 12 }

// cas pratique créer le fichier 05-exo.ts 
/**
// ce fichier va contenir plusieurs variables
// veuillez les typer les variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};
 liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/

// typer chaque variable correctement 
// transformer le fichier .ts en .js dans la version es6 et enlever tous les commentaires dans le fichier .js


