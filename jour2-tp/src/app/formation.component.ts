import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'formation',
  template: `{{ rendu }}`
})
export class FormationComponent implements OnInit {
  @Input() data : any; 
  public rendu : any;
  constructor() { }

  ngOnInit(): void {
    this.rendu = ""
    for( let [key, value] of Object.entries( this.data )){
      if(key != "id"){
        this.rendu += key +" "+ value  + " "; 
      }
    }
  }

}

// 13h40 ... rxjs 
// fusionner plusieurs observables 
// Suject 

// faire communiquer des composants qui ne sont parent @Input / @Output ... !! 
