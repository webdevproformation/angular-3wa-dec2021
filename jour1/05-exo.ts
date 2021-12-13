let liste1 : string = "pêche poire ananas";
let liste2 : string[] = ["pêche" , "poire", "ananas"]; 
//let liste3 : Array<string | number> = ["pêche", 4, "poire", 3, "ananas" , 2];
let liste3 : (string | number)[] = ["pêche", 4, "poire", 3, "ananas" , 2];

interface  interfaceListe4 {
    items  : Array<string| number>,
    budget  : number ,
    unite : string
}

let liste4 : interfaceListe4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};

interface interfaceProduit {
    id : number ,
    nom : string ,
    quantite : number
}

let liste5 : Array<interfaceProduit> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];