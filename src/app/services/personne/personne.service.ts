import { Injectable } from '@angular/core';
import { Personne } from 'src/app/models/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Personne[]>("http://localhost:8080/personne").pipe();
  }

  add(personne : Personne){
    return this.http.post("http://localhost:8080/personne", personne).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/personne/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Personne>("http://localhost:8080/personne/" + id).pipe();
  }

  update(id:number, personne:Personne){
    return this.http.put("http://localhost:8080/personne/" + id, personne).pipe();
  }

  getAllByZone(zonestr:string){
    return this.http.get<Personne[]>("http://localhost:8080/personne/zone/"+zonestr).pipe();
  }

  getByLogin(login:string){
    return this.http.get<Personne>("http://localhost:8080/personne/login/"+login).pipe();
  }
}
