import { Injectable } from '@angular/core';
import {interfaceEtudiant} from "./etudiant"
@Injectable({ 
  // permet utiliser une service dans un service 
  // déclarer le service dans notre module dans le fichier app.module.ts
  providedIn: 'root'
})
export class BddService {
  private _users : Array<interfaceEtudiant> = [
    {id : 1 , nom : "Pierre" , status : true },
    {id : 2 , nom : "Marie" , status : false } ,
  ]; 
  get users() {
    return this._users
  }


  constructor() { }
}
