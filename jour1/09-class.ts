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

