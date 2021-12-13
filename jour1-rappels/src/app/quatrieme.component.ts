import { Component, OnInit } from '@angular/core';
import { BddService } from "./bdd.service"; 

@Component({
  selector: 'quatrieme',
  template: `
    <input type="text" #inputValue >
    <button (click)="onClickButton(inputValue)">Ajouter un texte dans la liste</button>
    <ul>
      <li *ngFor="let skill of skills">{{ skill }}</li>
    </ul>
  `
})
export class QuatriemeComponent implements OnInit {
  public constructor( public dataService : BddService ) { }
  // injection de dépendance + syntaxe courte pour créer la propriété dataService
  // angular this.dataService = new BddService()
  public onClickButton(inputValue : HTMLInputElement){
    if(inputValue.value.length > 0){
      this.skills.push(inputValue.value);
      inputValue.value = "";
      return 
    }
    return alert("veuillez remplir le champ");
  }
  public skills : Array<string> = ["js", "node"]; // dès qu'une propriété de la class est modifiée
  // automatiquement la vue est rafraichie 
  ngOnInit(): void {
    console.log( this.dataService.users )
  }
}
