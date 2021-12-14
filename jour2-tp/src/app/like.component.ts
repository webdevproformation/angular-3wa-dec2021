import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <div class="d-flex align-items-baseline">
      <span class="badge bg-warning">{{nb}}</span>
      <button class="btn btn-outline-danger ms-2 btn-sm">Ajouter</button>
    </div>`
})
export class LikeComponent implements OnInit {
  @Input() public nb : number| undefined ;
  constructor() {
    console.log(this.nb);
  }

  ngOnInit(): void {
    console.log(this.nb);
  }

}
