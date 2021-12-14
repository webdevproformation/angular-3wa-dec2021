import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <div class="d-flex align-items-baseline">
      <span class="badge bg-warning">{{nb}}</span>
      <button class="btn btn-outline-danger ms-2 btn-sm" (click)="onClick()">Ajouter</button>
    </div>`
})
export class LikeComponent implements OnInit {
  @Input() public nb : number | undefined ;
  @Output() public augmenter : EventEmitter<number> ;
  public onClick(){
    this.augmenter.emit(1);
    // modifier la valeur de like qui est stockée dans le composant parent 
  }
  constructor() {
    this.augmenter = new EventEmitter();
    console.log(this.nb);
  }

  ngOnInit(): void {
    console.log(this.nb);
  }

}
