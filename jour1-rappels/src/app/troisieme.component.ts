import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'troisieme',
  template: `
    <h2>{{ titre }}</h2>
    <p [innerText]="contenu"></p>
    <p>{{ liste[0] }}</p>
    <p [innerText]="liste[1]"></p>
    <ul>
      <li *ngFor="let saison of liste">{{saison}}</li>
      <li *ngFor="let saison of liste" [innerText]="saison"></li>
    </ul>
    <h2>fonction qui retourne un tableau</h2>
    <ul>
      <li *ngFor="let etudiant of getUsers()">{{etudiant.id}} - {{ etudiant.nom }}</li>
      <li *ngFor="let etudiant of getUsers()">{{etudiant.id + " - " + etudiant.nom.toUpperCase() }}</li>
    </ul>
    <p *ngIf="isLogged">Vous êtes bien connecté</p> 
    <p *ngIf="!isLogged">Veuillez vous connecter pour accéder à cette page</p>
    <p *ngIf="isAdmin()">Bienvenu cher Administrateur !! </p>
    <!-- directive d'action  récupérer des informations de la vue => la class --> 
    <button (click)="onClickAction1()">Action1</button>
    <p #paragraphe >comment allez vous ??? </p> 
    <button (click)="onClickAction2(paragraphe)">Action 2</button>
    <input type="text" (keydown)="onKeydownInput($event)"  >
  `
})
export class TroisiemeComponent implements OnInit {

  public onKeydownInput($event : Event ){ 
    // Event => événement du DOM 
    // EventEmitter Envoyer une info composant Enfant => Composant parent
    const input = <HTMLInputElement>$event.target ; // assertion de type 
    // const input = $event.target as HTMLInputElement; // assertion de type 
    console.log(input.value); 
  }

  public onClickAction1(){
    alert("j'ai cliqué sur le bouton 1");
  }

  public onClickAction2(paragraphe : HTMLParagraphElement){
    console.log(paragraphe.innerText); 
    this.titre = paragraphe.innerText; 
  }

  public titre : string = "Titre troisième composant";
  public contenu : string = "lorem ipsum" ; // propertyBinding 
  public liste : Array<string> = ["printemps", "été" , "automne"]; 
  public getUsers(){
    return [{id : 1, nom : "Alain"} , {id : 2 , nom : "Béatrice"}]
  }
  public isLogged : boolean = false ; 

  public isAdmin(){
    return false ; 
  }


  constructor() { }

  ngOnInit(): void {
  }
    // comment envoyer des informations de class => vue (html)
    // comment récupérer des informations de html => class 
    // Directives 
    // 15h35 bon café @ toute suite !!! 
}
