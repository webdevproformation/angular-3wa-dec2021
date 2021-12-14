import { Component, OnInit } from '@angular/core';
import { from , Observable } from "rxjs";
import { map , find , reduce , tap , filter , toArray } from "rxjs/operators";
interface interfaceProduit{
  id : number , nom : string , prix : number , qte : number
}
@Component({
  selector: 'operateurs',
  template: `
    <button class="btn btn-primary" (click)="onClickBtn1()">Action 1</button>
    <p *ngFor="let p of p1">{{ p.nom }}</p>
  `
})
export class OperateursComponent implements OnInit {

  public p1 : Array<interfaceProduit> | undefined ;
  public onClickBtn1(){
    // lorsque je clique sur ce bouton => récupérer l'ensemble des produits prix unitaire >= 10
    this.obs$
    .pipe(
      filter(produit => {return produit.prix >= 10}),
      toArray() // permet de toutes les valeurs qui vérifient le filtrage => []
    )
    .subscribe( data => this.p1 = data );
  }


  public panier : Array<interfaceProduit> = [
    { id : 1 , nom : "produit1", prix : 10 , qte : 2},
    { id : 2 , nom : "produit2", prix : 5 , qte : 4},
    { id : 3 , nom : "produit3", prix : 20 , qte : 10},
    { id : 4 , nom : "produit4", prix : 2 , qte : 30}
  ]
  public obs$ : Observable<interfaceProduit> ;
  public constructor() { 
    this.obs$ = from (this.panier)
  }
  ngOnInit(): void {
  }
}
