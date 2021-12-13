export {}

interface interfaceA{
    prix : number ,
    status ?: boolean // facultative 
}

const a : Array<interfaceA> = [
    {prix : 10 , status : false},
    {prix : 20}
];

// fonction classique

function calcul ( a :number , b :number ) :number {
    return a + b ; 
}

// fonction fléchée

const puissance = (a :number ) :number =>  {
    return a ** 2; 
}

interface interfaceVehicule{
    nom : string ,
    dt_Achat ?: Date ,
    demarrage( modele : string )  : string 
} 

const voiture : interfaceVehicule = {
    nom : "Renault",
    dt_Achat : new Date(),
    demarrage : function( modele ){
        return this.nom + " " + modele
    }
}

console.log(voiture.nom);
console.log(voiture.demarrage("Twingo"));