import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { from, Observable } from 'rxjs';
import {map , take , mergeAll , toArray} from "rxjs/operators";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface interfaceUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}



@Component({
  selector: 'exo3',
  template: `
    <section class="d-flex justify-content-between">
    <div *ngFor="let user of users">
    <h2>{{user.name}}</h2>
    <ul>
    <li>tel : {{user.phone}}</li>
    <li>email : {{user.email}}</li>
    </ul>
    </div>
    <section>
  `
})
export class Exo3Component implements OnInit {

  private urlApiUser : string = "https://jsonplaceholder.typicode.com/users"
  public users : Array<{name: string, phone : string , email : string}> | undefined ;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    (<Observable<Array<interfaceUser>>>this.http.get(this.urlApiUser) )
        .pipe( 
          map( tableau => {return from(tableau)}),
          mergeAll(),
          map( user => {return { name : user.name , email : user.email , phone : user.phone  }} ),
          take(3),
          toArray()
          )
          .subscribe( data => this.users = data )
  }

}
