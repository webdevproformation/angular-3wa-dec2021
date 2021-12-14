import { Component, OnInit } from '@angular/core';
import { from } from "rxjs";
import { filter } from "rxjs/operators";

interface interfaceFormation {id : number , nom : string , duree : number , unite : string}

@Component({
  selector: 'exo1',
  template: `
    <ul>
      <li *ngFor="let f of showFormation" ><formation [data]="f"></formation></li>
    </ul>
  `
})
export class Exo1Component implements OnInit {
  public formation : Array<interfaceFormation> = [ 
      {id : 1 , nom : "js" , duree : 2 , unite : "jour"},
      {id : 2 , nom : "node" , duree : 5 , unite : "jour"},
      {id : 3 , nom : "angular" , duree : 10 , unite : "jour"},
      {id : 4 , nom : "react" , duree : 6 , unite : "jour"}
  ]
  public showFormation : Array<interfaceFormation> = []
  ngOnInit(): void {
    const formation$ = from (this.formation)

    const formationLongue$ = formation$.pipe( 
      filter((f) => {  return f.duree >= 6 })
    )
    formationLongue$.subscribe( f => this.showFormation.push(f) )
  }
}
