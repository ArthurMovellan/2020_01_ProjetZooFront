import { Injectable } from '@angular/core';
import { Etat } from 'src/app/models/etat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Etat[]>("http://localhost:8080/etat").pipe();
  }

  add(etat : Etat){
    return this.http.post("http://localhost:8080/etat", etat).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/etat/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Etat>("http://localhost:8080/etat/" + id).pipe();
  }

  update(id:number, etat:Etat){
    return this.http.put("http://localhost:8080/etat/" + id, etat).pipe();
  }
}
