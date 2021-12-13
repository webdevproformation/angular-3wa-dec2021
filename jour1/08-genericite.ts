// 08-genericite.ts 

// permet de rendre les fonctions et class plus flexible dans le fait de typer 
export {};

function operation ( a :number , b : number  ){
    return a + b ; 
}

operation(1,2); 

// bloquer si je veux utiliser cette fonction avec paramètres d'autres types 

function operationString ( a :string , b : string  ){
    return a + b ; 
}
// duplication de code juste que le typage des paramètres 

operationString( "a" , "b" );

// éviter cette duplication => fonction + flexible => fonction Générique 

function op<T> ( a : T , b : T)  : T   {
    return a  ; 
}

op("toto" , "tata")
op(1 , 2)
op({nom : "Alain"} , {nom : "Béatrice"})


function firstItem<T> ( tableau : Array<T> )  : T  {
    return tableau[0]
}
const resutlat = firstItem( [ { id : 1 } , {id : 2}] )

resutlat.id

const resultat2 = firstItem( [ { etudiant : "ALain" , status : false } , { etudiant : "Béatrice" , status : true }] );

resultat2.etudiant ; 
resultat2.status  ;

function firstItem2 ( tableau : Array<{etudiant : string , status : boolean }> )   {
    return tableau[0]
}

function firstItem3 ( tableau : Array<{id : number }> )   {
    return tableau[0]
}

// possible d'utiliser les généricités sur les class 


class Batiment<T> {
    adresse : T ; 

    constructor( adresse : T ){
        this.adresse = adresse ;
    }

    info (){
        return this.adresse
    }
}
const b = new Batiment( "75 rue du Paradis" )
b.info().toUpperCase();

const c = new Batiment( {
    rue : "75 rue de Paris",
    cp : 75000,
    ville : "Paris"
} )
c.info().rue.toUpperCase();

const d = new Batiment( {
    rue : "75 rue de Paris",
    cp : 75000,
    ville : "Paris",
    enVente : false
} )
d.info().rue.toUpperCase();


const a : any = "bonjour"

a.toUpperCase(); // string
a.toFixed(); // number
a.map() // tableau 

// généricite => créer une fonction ou une class 
// fonction paramètres [ {id : , nom : } ]
// class paramètre du constructeur 


function userActif ( tableau : Array<any>){
  return tableau.filter( user => user.status )
}


const r = userActif([{id : 1 }, { id : 2}])
r[0].tata

function userActif2<T extends {status : boolean}> ( tableau : Array<T>) : Array<T>{
    return tableau.filter( user => user.status )
}

const r2 = userActif2([{id : 1 , status : true} , {id : 2 , status : false}])
const r3 = userActif2([{id : 1 , nom : "A" , status : true} , {id : 2 ,  nom : "B" , status : false}])

r2[0].id
r3[0].nom

// plus flexible 
// DOCUMENTATION 
