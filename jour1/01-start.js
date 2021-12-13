"use strict";
exports.__esModule = true;
// module 
var a = "bonjour les amis"; // js => ts 
var b = function () {
    return "comment allez vous ???";
};
// ES 6 class 
var Etudiant = /** @class */ (function () {
    function Etudiant(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    return Etudiant;
}());
console.log(a);
// cd jour1
// node 01-start.ts // ça fonctionne 
// Mais pas sur les browsers
// tsc 01-start.ts 01-start.js 
