import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form1',
  template: `
    <h2>exemple 1</h2>
    <form>
      <input type="text" name="prenom" placeholder="votre prénom" class="form-control">
      <input type="text" name="nom" placeholder="votre nom" class="form-control my-4">
      <input type="submit" class="btn btn-outline-success">
    </form>
  `
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
