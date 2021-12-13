import { Component, OnInit } from '@angular/core';

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
  public onClickButton(inputValue : HTMLInputElement){
    if(inputValue.value.length > 0){
      this.skills.push(inputValue.value);
      inputValue.value = "";
      return 
    }
    return alert("veuillez remplir le champ");
  }
  public skills : Array<string> = ["js", "node"];

  constructor() { }

  ngOnInit(): void {
  }

}
