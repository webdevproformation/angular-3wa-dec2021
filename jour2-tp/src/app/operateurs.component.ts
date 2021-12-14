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
    <hr>
    <button class="btn btn-warning" (click)="onClickBtn2()">Action 2</button>
    <hr>
    <button class="btn btn-dark" (click)="onClickBtn3()">Action 3</button>
    <hr>
    <button class="btn btn-info" (click)="onClickBtn4()">Action 4</button>
  `
})
export class OperateursComponent implements OnInit {

  public onClickBtn4(){
    // tap opérateur qui permet de récupérer l'information envoyé dans le flux SANS le modifier
    this.obs$
    .pipe(
      tap( data => console.log(data) ),
      filter( data => {return data.qte > 5 } ),
      tap( data => console.log(data) ),
      map( data => { return { id : data.id , nom : data.nom } } ), 
      tap( data => console.log(data) ),
      map( data => { return { nom : data.nom.toUpperCase() } } ),
      tap( data => console.log(data) ),
      toArray(), 
      tap( data => console.log(data) ) // traitement AVANT que les données soient affichées dans le composant
    )
    .subscribe(  )

  }

  public onClickBtn3(){
    // enrichir le tableau panier avec une nouvelle information totalTTC 
    this.obs$
    .pipe(
      map(element => {
        return Object.assign( {} , element , { totalTTC : element.prix * element.qte * 1.2 } )
      }),
      toArray()
    )
    .subscribe(data => console.log(data));
  }


  public onClickBtn2(){
    // si je clique sur le bouton => total de ma commande => somme prix * qte pour chaque produit du panier
    this.obs$
    .pipe( 
      reduce( (accumulateur , element) => { return accumulateur + element.prix * element.qte } , 0 )
    )
    .subscribe( data  => console.log(data) )
  }

  private totalPanier (){
    let total = 0 ;
    for(let element of this.panier){
      total += element.qte * element.prix;
    }
    console.log(total); 

    this.panier.reduce( (total , element) => { 
      return total + element.prix * element.qte
    } , 0  )
  }


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
    { id : 1 , nom : "produit1", prix : 10 , qte : 2}, // 20
    { id : 2 , nom : "produit2", prix : 5 , qte : 4},   // 20
    { id : 3 , nom : "produit3", prix : 20 , qte : 10},  // 200
    { id : 4 , nom : "produit4", prix : 2 , qte : 30}   // 60
  ]
  public obs$ : Observable<interfaceProduit> ;
  public constructor() { 
    this.obs$ = from (this.panier)
  }
  ngOnInit(): void {
  }
}
