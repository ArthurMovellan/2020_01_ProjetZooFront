import { Injectable } from '@angular/core';
import { Tache } from 'src/app/models/tache';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Tache[]>("http://localhost:8080/tache").pipe();
  }

  add(tache : Tache){
    return this.http.post("http://localhost:8080/tache", tache).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/tache/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Tache>("http://localhost:8080/tache/" + id).pipe();
  }

  update(id:number, tache:Tache){
    return this.http.put("http://localhost:8080/tache/" + id, tache).pipe();
  }

  getAllByZone(zonestr:string){
    return this.http.get<Tache[]>("http://localhost:8080/tache/zone/"+zonestr).pipe();
  }

  getAllByIdPersonne(idP:number){
    return this.http.get<Tache[]>("http://localhost:8080/tache/personne/"+idP).pipe();
  }

  affecterEtat(idT, idE){
    return this.http.put("http://localhost:8080/tache/id:"+idT+"/etat:"+idE,"").pipe();
  }

  getAllByIdEtat (idE : number){
    return this.http.get<Tache[]>("http://localhost:8080/tache/etat/"+idE).pipe();
  }

  getAllByIdPersonneByIdEtat (idP : number, idE : number){
    return this.http.get<Tache[]>("http://localhost:8080/tache/personne/" + idP + "/etat/" + idE).pipe();
  }
}
