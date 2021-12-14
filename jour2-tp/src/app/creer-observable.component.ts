import { Component, OnInit } from '@angular/core';
import { of , from } from "rxjs"
import { filter } from "rxjs/operators" // à utiliser dans la fonction .pipe()

@Component({
  selector: 'creer-observable',
  template: `
    <p>
      creer-observable works!
    </p>
  `
})
export class CreerObservableComponent implements OnInit {

  constructor() { 
    const obs$ = of("bonjour", [1,2,3,4], false )
    obs$.subscribe( (data) => { console.log(data) }  )

    // 1 seul paramètre qui est OBLIGATOIREMENT un tableau
    const obs2$ = from(["bonjour" , [1,2,3,4] , false])
    obs2$.subscribe( (data) => console.log(data)  );

    // base de données => [{}, {}, {}] from permet de prendre chaque item d'un tableau et de traiter séparément 

    const obs3$ = of( [1,2,3,4] )
    obs3$.subscribe( (data) => console.log(data)  );

    // force des observables => effectuer des traitements entre création de l'observable ET sa souscription 
    // opérateurs 

    const data = [
                {id : 1, nom : "Alain" , status : true},
                {id : 2, nom : "Béatrice" , status : false},
                {id : 3, nom : "Charles" , status : false},
              ];

    const users$ = from(data)
    
    // traitements entre users$ et subscribe
    // exécuter des fonctions qui vont modifier le flux de données 
    // opérateurs de rxjs 
    const userActif$ = users$.pipe(
      //filter( ( user ) => { return user.status === true } )
      filter(  user  =>  user.status )
    )

    userActif$.subscribe( user => console.log(user) )

  }

  ngOnInit(): void {
  }

}
