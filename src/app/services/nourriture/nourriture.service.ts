import { Injectable } from '@angular/core';
import { Nourriture } from 'src/app/models/nourriture';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NourritureService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Nourriture[]>("http://localhost:8080/nourriture").pipe();
  }

  add(nourriture : Nourriture){
    return this.http.post("http://localhost:8080/nourriture", nourriture).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/nourriture/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Nourriture>("http://localhost:8080/nourriture/" + id).pipe();
  }

  update(id:number, nourriture:Nourriture){
    return this.http.put("http://localhost:8080/nourriture/" + id, nourriture).pipe();
  }

  modifStock(id:number, stock:number){
    return this.http.put("http://localhost:8080/nourriture/id:" + id + "/stock:" + stock ,"").pipe();
  }
}
