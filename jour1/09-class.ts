// créer des class 

class Jardin {
    // portée des membres de la class
    private nom :string ;
    protected surface : number ;
    public adresse ;

    public constructor(nom : string , surface : number , adresse : string ){
        this.nom = nom ;
        this.surface = surface ;
        this.adresse = adresse ;
    }

    public getSurface(){
        this.calcul()
    }

    private calcul(){

    }
}
// javascript dernière version !! 
class Privee {

    constructor(params , option){
        this.params = params;
        this.option = option;
    }

    #calcul(){ // possible de créer des méthodes privées dans les class js 

    }

    definition(){
        this.#calcul();
    }
}

// constructeur => syntaxe raccourcie 

class Etudiant {
    public nom : string;
    public age : number ;
    public constructor(nom : string , age : number){
        this.nom = nom;
        this.age = age;
    }
}

class Etudiant2 {
    public constructor(
            public nom : string , 
            public age : number ,
            public skills ?: Array<string>
    ){}
}
// objet => Object
//       => { }
//       => interface
//       => Etudiant2 le nom d'une class pour typer un objet 

const e : Etudiant2 = { nom : "ALain" , age : 12 }; 

/*
Enoncé :
0 cas pratique créer le fichier 10-exo.ts 
1 Récupérez la class Produit suivante 
2 ajoutez les setter et getter pour l'attribut _ref et modifier le constructeur de la class

// ajouter un nouveau membre propriété privée _ref
// ajouter setter et getter pour ce nouveau membre de la class 

3 créer deux instances de la class Produit avec les arguments suivants :

                name     |     ref
   produit1 : "Btwin"    | "Decathlon"
   produit2 : "Peugeot"  |     206


4 affichez les deux instances (produit1 et produit2) dans la console du terminal et transpiler le fichier .ts en .js

console.log( )
*/

class Product {
    private _name: string;

    constructor(name: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter
    get name(): string {
        return this._name;
    }

}


