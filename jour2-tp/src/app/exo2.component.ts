import { Component, OnInit } from '@angular/core';
import { from, Observable } from "rxjs"
import {filter , map , find , toArray } from "rxjs/operators";

interface interfaceJoueur {
  id : number , name : string , score : number
}
@Component({
  selector: 'exo2',
  template: `
    <button class="btn btn-success" (click)="onClickAction1()">joueur score >= 100</button>
    <button class="btn btn-danger" (click)="onClickAction2()">Majuscule pour chaque joueur</button>
    <button class="btn btn-warning" (click)="onClickAction3()">Majuscule pour chaque joueur et <=100 </button>
    <button class="btn btn-secondary" (click)="onClickAction4()">rechercher stephan</button>
  `
})
export class Exo2Component implements OnInit {

  public onClickAction4(){
    this.obs$!
    .pipe(
      find( joueur => {return joueur.name === "stephan"})
    )
    .subscribe(joueurTrouve => console.log(joueurTrouve))
  }

  public onClickAction3(){
    this.obs$!
    .pipe(
      filter((joueur) => { return joueur.score <= 100}),
      this.nomMajuscule()
    )
    .subscribe( joueurs => console.log(joueurs));
  }

  private nomMajuscule(){
    return map((joueur : any) => { 
        return Object.assign(
                    { } , 
                    joueur  ,
                    { name : joueur.name.charAt(0).toUpperCase() + joueur.name.slice(1)} , 
        )
    })
  }

  public onClickAction2(){
    this.obs$!
    .pipe(
     this.nomMajuscule()
    )
    .subscribe( listeJoueurMajuscule => console.log(listeJoueurMajuscule))
  }

  public onClickAction1(){
      this.obs$!
      .pipe(
        filter((joueur) => { return joueur.score >= 100}),
        toArray()
      )
      .subscribe(listeJoueur => console.log(listeJoueur))
  }


  private obs$ : Observable<interfaceJoueur> | undefined ;
  private joueurs : Array<interfaceJoueur>= [
    { id: 1, name: 'alan', score: 50 },
    { id: 2, name: 'albert', score: 150 },
    { id: 3, name: 'xavier', score: 0 },
    { id: 4, name: 'benoit', score: 5 },
    { id: 5, name: 'phil', score: 17 },
    { id: 6, name: 'sophie', score: 45 },
    { id: 7, name: 'stephan', score: 900 },
    { id: 8, name: 'elie', score: 178 },
    { id: 9, name: 'tony', score: 15 },
    { id: 10, name: 'robert', score: 11 },
    { id: 11, name: 'gerard', score: 8 },
    { id: 12, name: 'sandra', score: 6 },
    { id: 13, name: 'caroline', score: 23 }
  ]
  constructor() {
    this.obs$ = from(this.joueurs);
  }

  ngOnInit(): void {
  }

}
