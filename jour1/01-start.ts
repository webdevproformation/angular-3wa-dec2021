// fichier .ts => javascript classique => écrire du typescript 
export {}; // éviter que le transpiler typescript ET visual Code 
// module 

const a = "bonjour les amis" ; // js => ts 

const b = () => {  // js ES6 (version de 2015)
    return "comment allez vous ???" ; 
}

// ES 6 class 
class Etudiant{
    nom ;
    age ; 
    constructor(nom , age){
        this.nom = nom ;
        this.age = age ;
    }
}

console.log( a );
// cd jour1
// node 01-start.ts // ça fonctionne 
// Mais pas sur les browsers
// tsc 01-start.ts 

// touch 02-flag.ts