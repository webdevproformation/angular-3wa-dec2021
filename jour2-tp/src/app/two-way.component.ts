import { Component , OnChanges, } from '@angular/core';

@Component({
  selector: 'two-way',
  template: `
    <input type="text" class="form-input" [(ngModel)]="nom"> 
    <input type="text" class="form-input" [(ngModel)]="age"> 
    <input type="text" class="form-input" [(ngModel)]="couleur"> 
    <p>{{ nom }} -  - {{ couleur }}</p>
    <p [innerText]="methode()"></p>
  `
})
export class TwoWayComponent implements OnChanges {
  public nom : string = "Alain";
  public age : number = 12 ;
  public couleur : string = "#000";
  ngOnChanges(){
    console.log(this.age)
    console.log(typeof this.age)
  }
  methode(){
    return typeof this.age
  }
}

// ng g c front/composant => partie public de l'application (login / password)
// ng g c back/composant => créer des articles / modifier login et mdp user ... 
// ng g c commun/composant / directive / pipe 
// ng g s service/service1
// ng g s service/service2
// ng g s service/service3

// ng g m fonction1/ 
// ng g m fonction2/
// ng g m fonction3/

// espace de gestion 
// API => requête => base de données ORM de Symfony 