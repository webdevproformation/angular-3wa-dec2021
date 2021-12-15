import { Component, OnInit } from '@angular/core';
import { LocalDataService } from "../service/local-data.service";
import { interfaceArticle } from "../service/article";
import { NgForm } from "@angular/forms"
@Component({
  selector: 'crud',
  template: `
    <div class="row">
      <ul class="col-6 list-unstyled">
        <li *ngFor="let article of articles" class="my-4">
          <button class="btn btn-warning btn-sm" (click)="onClickGetArticle(article.id)">Modifier</button>
          <button class="btn btn-danger mx-3 btn-sm" (click)="onClickSuppr(article.id)">Supprimer</button>
          {{article.titre}}
        </li>
      </ul>
      <form class="col-6" #f="ngForm" (submit)="onSubmit(f)">
        <h2 class="fs-4"> créer un nouvel article </h2>
        <div class="mb-3">
          <input type="hidden" name="id" [(ngModel)]="id">
          <label for="titre">saisir un titre</label>
          <input 
              type="text" 
              id="titre" 
              class="form-control" 
              name="titre"
              [(ngModel)]="titre"
              required 
              minlength="3"
              maxlength="100"
              >
        </div>
        <div class="d-flex justify-content-end">
          <input type="submit" class="btn btn-outline-dark btn-sm">
        </div>
      </form>
    <div>`
})
export class CrudComponent implements OnInit {
  public id : number | undefined ;
  public titre : string | undefined; 

  public onClickGetArticle(id :number){
      // récupérer l'article dans la base de donnée 
      // requete http 
      this.data.getOne(id).subscribe( article => {
        // remplir le formulaire 
        console.log(article); 
        this.id = article.id
        this.titre = article.titre
      }  )
  }

  public onClickSuppr(id : number){
    this.data.delete(id).subscribe( reponse => {
      console.log(reponse); 
      this.articles = reponse;
    } )
  }

  public onSubmit(f : NgForm) {
    if(f.valid){
      // appeler un service qui va permettre d'ajouter un nouvel article dans la table articles
      console.log(f.value)

      // id === undefined => create
      // id !== undefined => update
      if(f.value.id){
        // update
        this.data.update( f.value ).subscribe( reponse => {
          this.articles = reponse
          f.reset();
        } )
      } else {
        // create
        this.data.create(f.value).subscribe( reponse => {
          this.articles?.push(reponse)
          // ajouter une nouvelle valeur à la variable articles 
          // {titre : "la valeur saisie" , id: généré par la base de donnée }
          // vider le formulaire 
          f.reset();
        } )
      }
    }
  }

  public articles : Array<interfaceArticle> | undefined ;
  public constructor(
      private data : LocalDataService
    
      ) { }
  ngOnInit(): void {
    this.data.getAll().subscribe( articles => this.articles = articles )
  }
}
