function verification ( largeur : number ) : number | string {
    if(largeur > 0){
        return largeur ; 
    }
    return "la largeur n'est pas conforme" ; 
}

// fonction qui retourne SOIT number SOIT un string 

// assertion de type en utilisant le mot clé as 
// 1ère syntaxe possible 
const resultat = verification(2) as number

console.log(resultat.toFixed(2)); // mettre de chiffre en dessous virgule 

// 2ème syntaxe <>

const resultat2 = <string>verification(-10) 
// const resultat2 = verification(-10) as string 

console.log(resultat2.toUpperCase()); 


const input = document.querySelector("input")
input.value

const input2 = document.querySelector(".nom") as HTMLInputElement // Element
input2.value

const input3 = <HTMLInputElement>document.querySelector(".nom") 
input3.value    

const getUser = () : Object => {
    return {
        nom : "Charles",
        age : 30
    }
}

interface interfaceUser { nom : string , age : number}

const user = getUser() as interfaceUser ;
console.log(user.nom);

(<interfaceUser>getUser()).nom

// rxJS 