import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../service/local-data.service";
import {interfaceArticle} from "../service/article"

@Component({
  selector: 'crud',
  template: `
    <div class="row">
      <ul class="col-6 list-unstyled">
        <li *ngFor="let article of articles" class="my-4">
          <button class="btn btn-warning btn-sm">Modifier</button>
          <button class="btn btn-danger mx-3 btn-sm">Supprimer</button>
          {{article.titre}}
        </li>
      </ul>
      <form class="col-6">
        <h2 class="fs-4"> créer un nouvel article </h2>
        <div class="mb-3">
          <label for="titre">saisir un titre</label>
          <input type="text" id="titre" class="form-control" name="titre">
        </div>
        <div class="d-flex justify-content-end">
          <input type="submit" class="btn btn-outline-dark btn-sm">
        </div>
      </form>
    <div>`
})
export class CrudComponent implements OnInit {
  public articles : Array<interfaceArticle> | undefined ;
  public constructor(private data : LocalDataService) { }
  ngOnInit(): void {
    this.data.getAll().subscribe( articles => this.articles = articles )
  }
}
