// touch 02-flag.ts => créer le fichier 

// tsc le ou les fichiers.ts à compiler 

// tsc fichier1.ts fichier2.ts .... 

// expressions régulières 
// tsc *.ts
// tsc src/*.ts

// drapeau => flag 

// tsc fichier1.ts --

/**

    --target es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, or esnext
    --module 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'
    // projet nodeJS => système de module commonjs  require() // module.exports = 
    // projet browser => système de module ECMAscript // es6 => export // import 
    --removeComments
    // supprimer les commentaires
    --strict - mode strict Javascript si on choisit target es6 pas besoin de mettre ce drapeau car es6 est strict

    --watch => écouter lorsque l'on modifie un fichier .ts => transpiler
    --outDir => dossier de destination 
    --noImplicitAny : déclenche une erreur si des paramètres des fonctions ne disposent pas de typage par annotation ( implicit any ) dans les fichiers .ts par exemple
    --esModuleInterop
    --noEmitOnError : ne pas générer le fichier .js si il y a une erreur dans le fichier
    --sourceMap : générer un fichier .map permettant aux navigateurs de la source ts du fichier js

 */

    export {} ;
    function calcul(a , b){

    }

   const c = 30 ; 

   // tsc 02-flag.ts --noEmitOnError
   // tsc 02-flag.ts --noEmitOnError --removeComments
   // tsc 02-flag.ts --noEmitOnError --removeComments --target es3 1995
   // tsc 02-flag.ts --noEmitOnError --removeComments --target es6
   // tsc 02-flag.ts --noEmitOnError --removeComments --module commonjs // nodejs 
   // tsc 02-flag.ts --noEmitOnError --removeComments --module es6      // module pour navigateur

   // tsc 02-flag.ts --noEmitOnError --removeComments --watch // terminal est bloqué en mode watch 

   const division = () => {
       console.log( 10 / 2);
   }

   class A {

   }

   class B extends A{

   }
// tsc 02-flag.ts --noEmitOnError --removeComments --watch --target es6
// 10h30 pause café => 15 min
// 12h30 => 1h => 13h30
// 15h00 => pause café 
// OK => 9h00 => 17h00
// café !!! rdv 10h50 @ toute suite !! 
