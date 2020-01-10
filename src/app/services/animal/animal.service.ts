import { Injectable } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Animal[]>("http://localhost:8080/animal").pipe();
  }

  add(animal : Animal){
    return this.http.post("http://localhost:8080/animal", animal).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/animal/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Animal>("http://localhost:8080/animal/" + id).pipe();
  }

  update(id:number, animal:Animal){
    return this.http.put("http://localhost:8080/animal/" + id, animal).pipe();
  }

  getAllByZone(zone:string){
    return this.http.get<Animal[]>("http://localhost:8080/animal/zone/"+zone).pipe();
  }

  modifNbAnimal(id:number, nbAnimal : number){
    return this.http.put("http://localhost:8080/animal/id:"+id+"/nbAnimal:"+nbAnimal,"").pipe();
  }
}
