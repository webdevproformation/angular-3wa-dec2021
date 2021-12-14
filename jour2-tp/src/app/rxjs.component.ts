import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'rxjs',
  template: `
    <p>
      rxjs works!
    </p>
  `,
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { 
    // observer => ce que l'on veut écouter 
    // ce que l'on veut observer
    // new Observable( function( ){ } )
    const observable$ = new Observable( ( observer ) => {
      // ce que fait ce que vous voulez observer 
      observer.next( "bonjour" ) // émettre une information
      observer.error("une erreur s'est produite")
      observer.next( [1, 2, 3, 4] ) // émettre un tableau
      observer.next( false );
      observer.complete() ; // clore l'envoi d'information de notre observer 
      observer.next( "la suite" ); // cette valeur n'est pas émise car .complete()
      // avant
    } )

    // un stream n'émet aucune données par défaut 
    // il faut s'abonner à une source de données observable$

    observable$.subscribe( 
              ( data ) => {  console.log(data) }  , // événement émis
               ex  =>  console.log(ex)   , // erreur 
              () => { console.log("end") }    // complete
    )

  }

  ngOnInit(): void {
  }

}
