import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way',
  template: `
    <p>
      two-way works!
    </p>
  `,
  styles: [
  ]
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
